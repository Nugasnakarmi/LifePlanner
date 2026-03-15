import { inject, Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { ToastrService } from 'ngx-toastr';
import { BoardTemplate, BoardTemplateTask } from 'src/app/interfaces/board-template.interface';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable({ providedIn: 'root' })
export class BoardTemplateApiService {
  private supabaseService = inject(SupabaseService);
  private toastr = inject(ToastrService);

  async getBoardTemplates(): Promise<BoardTemplate[]> {
    try {
      const user: User = await this.supabaseService.getUser();
      const { data: rows, error } = await this.supabaseService.supabase
        .from('board_templates')
        .select(`
          id, name, description, icon, category, created_at,
          board_template_tasks ( id, name, description, type, sort_order )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return (rows ?? []).map((row: any) => ({
        id: `board-${row.id}`,
        dbId: row.id as number,
        name: row.name,
        description: row.description ?? '',
        icon: row.icon,
        category: row.category,
        isBoardTemplate: true,
        tasks: ((row.board_template_tasks ?? []) as any[])
          .sort((a: any, b: any) => a.sort_order - b.sort_order)
          .map((t: any): BoardTemplateTask => ({
            name: t.name,
            description: t.description ?? '',
            type: t.type,
          })),
      }));
    } catch (error: any) {
      this.toastr.error(`Failed to load your templates: ${error?.message ?? error}`);
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
          icon: template.icon,
          category: template.category,
        })
        .select('id')
        .single();

      if (tplErr) {
        throw tplErr;
      }

      const templateId = (tplRow as any).id as number;

      if (template.tasks.length > 0) {
        const taskRows = template.tasks.map((t, i) => ({
          template_id: templateId,
          name: t.name,
          description: t.description,
          type: t.type,
          sort_order: i,
        }));

        const { error: tasksErr } = await this.supabaseService.supabase
          .from('board_template_tasks')
          .insert(taskRows);

        if (tasksErr) {
          throw tasksErr;
        }
      }

      this.toastr.success(`Template "${template.name}" saved`);
      return { ...template, id: `board-${templateId}`, dbId: templateId, isBoardTemplate: true };
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
