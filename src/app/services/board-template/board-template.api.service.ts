import { inject, Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { ToastrService } from 'ngx-toastr';
import {
  BoardTemplate,
  BoardTemplateList,
  BoardTemplateTask,
} from 'src/app/interfaces/board-template.interface';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable({ providedIn: 'root' })
export class BoardTemplateApiService {
  private supabaseService = inject(SupabaseService);
  private toastr = inject(ToastrService);

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
            board_template_tasks ( id, name, description, position )
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
      const user: User = await this.supabaseService.getUser();

      const { data: tplRow, error: tplErr } = await this.supabaseService.supabase
        .from('board_templates')
        .insert({
          user_id: user.id,
          name: template.name,
          description: template.description,
        })
        .select('id')
        .single();

      if (tplErr) {
        throw tplErr;
      }

      const templateId = (tplRow as any).id as number;

      for (const [listIndex, list] of template.lists.entries()) {
        const { data: listRow, error: listErr } = await this.supabaseService.supabase
          .from('board_template_lists')
          .insert({
            template_id: templateId,
            name: list.name,
            list_type: list.listType,
            position: listIndex,
          })
          .select('id')
          .single();

        if (listErr) {
          throw listErr;
        }

        const listId = (listRow as any).id as number;

        if (list.tasks.length > 0) {
          const taskRows = list.tasks.map((t, i) => ({
            template_id: templateId,
            template_list_id: listId,
            name: t.name,
            description: t.description,
            position: i,
          }));

          const { error: tasksErr } = await this.supabaseService.supabase
            .from('board_template_tasks')
            .insert(taskRows);

          if (tasksErr) {
            throw tasksErr;
          }
        }
      }

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
