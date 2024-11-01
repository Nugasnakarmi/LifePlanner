import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  supabaseUrl = environment['supabase-url'];
  supabase: SupabaseClient;
  constructor() {
    const supabaseKey = environment.SUPABASE_KEY;
    this.supabase = createClient(this.supabaseUrl, supabaseKey);
  }

  // async login(loginCredentials): Promise<any> {
  //   const credentials = Realm.Credentials.anonymous();
  //   try {
  //     // Authenticate the user
  //     const user: Realm.User = await this.app.logIn(credentials);
  //     // `App.currentUser` updates to match the logged in user
  //     assert(user.id === this.app.currentUser.id);
  //     console.log(user);
  //     return user;
  //   } catch (err) {
  //     console.error('Failed to log in', err);
  //   }
  // }
  async loginEmailPassword(loginCredentials): Promise<any> {
    // Create an anonymous credential
    const credentials = Realm.Credentials.emailPassword(
      loginCredentials.email,
      loginCredentials.password
    );
    try {
      let { data, error } = await this.supabase.auth.signInWithPassword({
        email: loginCredentials.email,
        password: loginCredentials.password,
      });
      // // Authenticate the user
      // const user: Realm.User = await this.app.logIn(credentials);
      // // `App.currentUser` updates to match the logged in user
      // assert(user.id === this.app.currentUser.id);
      // return user;
    } catch (err) {
      console.error('Failed to log in', err);
    }
  }
}
