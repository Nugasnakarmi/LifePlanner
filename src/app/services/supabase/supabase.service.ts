import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabaseUrl = environment.SUPABASE_URL;
  supabase: SupabaseClient;
  constructor() {
    const supabaseKey = environment.SUPABASE_SECRET_KEY;
    this.supabase = createClient(this.supabaseUrl, supabaseKey);
  }

  async getUser(): Promise<User> {
    const userResponse = await this.supabase.auth.getUser();
    return userResponse.data.user;
  }
}
