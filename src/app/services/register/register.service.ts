import { Injectable } from '@angular/core';
import * as Realm from 'realm-web';
import { environment } from 'src/environments/environment';
import { createClient } from '@supabase/supabase-js';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor() {}
  supabaseUrl = environment['supabase-url'];
  supabaseKey = process.env.SUPABASE_KEY;
  supabase = createClient(this.supabaseUrl, this.supabaseKey);

  async registerUser(email, password): Promise<any> {
    let { data, error } = await this.supabase.auth.signUp({
      email: email,
      password: password,
    });

    console.log(data);
  }

  // async confirmUser(token: string, tokenId: string) {
  //   await this.app.emailPasswordAuth.confirmUser({ token, tokenId });
  // }
}
