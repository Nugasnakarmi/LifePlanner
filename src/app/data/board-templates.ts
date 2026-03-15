import { BoardTemplate } from '../interfaces/board-template.interface';

/**
 * System board templates are now seeded directly in Supabase via migration
 * (supabase/migrations/20260315120000_create_board_templates.sql) and are
 * loaded at runtime from the database.  This file is kept as an empty
 * placeholder to avoid breaking any future import.
 */
export const BOARD_TEMPLATES: BoardTemplate[] = [];
