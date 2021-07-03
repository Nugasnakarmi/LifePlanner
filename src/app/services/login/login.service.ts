import { Injectable } from '@angular/core';

import * as Realm from "realm-web";
import * as assert from 'assert';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  app: Realm.App = new Realm.App({ id: environment['realm-app-id']});

  async login( loginCredentials): Promise<any> {
 
    const credentials = Realm.Credentials.anonymous();
    try {
      // Authenticate the user
      const user: Realm.User = await this.app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
      assert(user.id === this.app.currentUser.id);
      console.log(user);
      return user
    } catch (err) {
      console.error("Failed to log in", err);
    }
  }
  async loginEmailPassword(loginCredentials) : Promise<any>{
    // Create an anonymous credential
    const credentials = Realm.Credentials.emailPassword(loginCredentials.email, loginCredentials.password);
    try {
      // Authenticate the user
      const user: Realm.User = await this.app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
      assert(user.id === this.app.currentUser.id)
      return user
    } catch(err) {
      console.error("Failed to log in", err);
    }
  }
  
}
