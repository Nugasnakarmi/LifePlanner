import { inject, Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { ToastrService } from 'ngx-toastr';
import {
  BoardTemplate,
  BoardTemplateList,
  BoardTemplateTask,
  TemplateActivity,
} from 'src/app/interfaces/board-template.interface';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { SupabaseService } from '../supabase/supabase.service';
import { InputSanitizerService } from '../sanitizer/input-sanitizer.service';

@Injectable({ providedIn: 'root' })
export class BoardTemplateApiService {
  private supabaseService = inject(SupabaseService);
  private toastr = inject(ToastrService);
  private sanitizer = inject(InputSanitizerService);

  /**
   * Returns all templates the authenticated user may see:
   * system templates (is_system = true) plus the user's own templates.
   */
  async getBoardTemplates(): Promise<BoardTemplate[]> {
    try {
      const user: User = await this.supabaseService.getUser();
      const { data: rows, error } = await this.supabaseService.supabase
        .from('board_templates')
        .select(`
          id, name, description, is_system, user_id,
          board_template_lists (
            id, name, list_type, position,
            board_template_tasks ( id, name, description, position, activities )
          )
        `)
        .or(`is_system.eq.true,user_id.eq.${user.id}`)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return (rows ?? []).map((row: any): BoardTemplate => ({
        id: `board-${row.id}`,
        dbId: row.id as number,
        name: row.name,
        description: row.description ?? '',
        isSystem: row.is_system,
        isBoardTemplate: !row.is_system,
        lists: ((row.board_template_lists ?? []) as any[])
          .sort((a: any, b: any) => a.position - b.position)
          .map((list: any): BoardTemplateList => ({
            id: list.id,
            name: list.name,
            listType: list.list_type as IdeaType,
            position: list.position,
            tasks: ((list.board_template_tasks ?? []) as any[])
              .sort((a: any, b: any) => a.position - b.position)
              .map((t: any): BoardTemplateTask => ({
                name: t.name,
                description: t.description ?? '',
                position: t.position,
                activities: ((t.activities ?? []) as any[])
                  .sort((a: any, b: any) => (a.position ?? 0) - (b.position ?? 0))
                  .map(
                    (a: any, idx: number): TemplateActivity => ({
                      name: a.name,
                      data: a.data ?? [],
                      media: a.media ?? [],
                      position: typeof a.position === 'number' ? a.position : idx,
                    })
                  ),
              })),
          })),
      }));
    } catch (error: any) {
      this.toastr.error(`Failed to load templates: ${error?.message ?? error}`);
      return [];
    }
  }

  async saveTemplate(template: BoardTemplate): Promise<BoardTemplate | null> {
    try {
      // Use an atomic RPC function that inserts the header, lists, and tasks
      // (with activities) in a single Postgres transaction.  This avoids the
      // PostgREST ambiguity between the board_template_tasks.activities JSONB
      // column and the separate `activities` table, which caused silent insert
      // failures when tasks included activity data.
      const lists = template.lists.map((list, i) => ({
        name: this.sanitizer.sanitize(list.name),
        listType: list.listType,
        position: i,
        tasks: list.tasks.map((t, j) => ({
          name: this.sanitizer.sanitize(t.name),
          description: this.sanitizer.sanitize(t.description ?? ''),
          position: j,
          activities: (t.activities ?? []).map((a, k) => ({
            name: this.sanitizer.sanitize(a.name),
            data: this.sanitizer.sanitizeDataFields(a.data) ?? [],
            media: a.media ?? [],
            position: k,
          })),
        })),
      }));

      const { data, error } = await this.supabaseService.supabase.rpc(
        'save_board_template',
        {
          p_name: this.sanitizer.sanitize(template.name),
          p_description: this.sanitizer.sanitize(template.description),
          p_lists: lists,
        }
      );

      if (error) throw error;

      const templateId = data as number;

      this.toastr.success(`Template "${template.name}" saved`);
      return {
        ...template,
        id: `board-${templateId}`,
        dbId: templateId,
        isBoardTemplate: true,
        isSystem: false,
      };
    } catch (error: any) {
      this.toastr.error(`Failed to save template: ${error?.message ?? error}`);
      return null;
    }
  }

  async updateTemplate(template: BoardTemplate): Promise<BoardTemplate | null> {
    try {
      const dbId = template.dbId;
      if (!dbId) throw new Error('Template has no database ID');

      // Use an atomic RPC function that updates the header, deletes existing
      // lists (which cascades to tasks), and re-inserts everything in a single
      // Postgres transaction — preventing partial-update data loss on failure.
      const lists = template.lists.map((list, i) => ({
        name: this.sanitizer.sanitize(list.name),
        listType: list.listType,
        position: i,
        tasks: list.tasks.map((t, j) => ({
          name: this.sanitizer.sanitize(t.name),
          description: this.sanitizer.sanitize(t.description ?? ''),
          position: j,
          activities: (t.activities ?? []).map((a, k) => ({
            name: this.sanitizer.sanitize(a.name),
            data: this.sanitizer.sanitizeDataFields(a.data) ?? [],
            media: a.media ?? [],
            position: k,
          })),
        })),
      }));

      const { error } = await this.supabaseService.supabase.rpc(
        'update_board_template',
        {
          p_template_id: dbId,
          p_name: this.sanitizer.sanitize(template.name),
          p_description: this.sanitizer.sanitize(template.description),
          p_lists: lists,
        }
      );

      if (error) throw error;

      this.toastr.success(`Template "${template.name}" updated`);
      return {
        ...template,
        id: `board-${dbId}`,
        dbId,
        isBoardTemplate: true,
      };
    } catch (error: any) {
      this.toastr.error(`Failed to update template: ${error?.message ?? error}`);
      return null;
    }
  }

  async deleteTemplate(dbId: number): Promise<boolean> {
    try {
      const { error } = await this.supabaseService.supabase
        .from('board_templates')
        .delete()
        .eq('id', dbId);

      if (error) {
        throw error;
      }

      this.toastr.success('Template deleted');
      return true;
    } catch (error: any) {
      this.toastr.error(`Failed to delete template: ${error?.message ?? error}`);
      return false;
    }
  }
}
