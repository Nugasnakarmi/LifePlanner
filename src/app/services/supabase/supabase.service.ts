import { Injectable } from '@angular/core';
import { createClient, Session, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabaseUrl = environment.SUPABASE_URL;
  supabase: SupabaseClient;

  constructor() {
    const supabaseKey = environment.SUPABASE_KEY;
    this.supabase = createClient(this.supabaseUrl, supabaseKey);
  }

  async getUser(): Promise<User> {
    const userResponse = await this.supabase.auth.getUser();
    return userResponse.data.user;
  }

  async getSession(): Promise<Session | null> {
    const { data } = await this.supabase.auth.getSession();
    return data.session;
  }

  async signOut(): Promise<void> {
    await this.supabase.auth.signOut();
  }
}
