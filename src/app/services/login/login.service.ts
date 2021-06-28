import { Injectable } from '@angular/core';

import * as Realm from "realm-web";
import * as assert from 'assert';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  async login(): Promise<any> {
    const app: Realm.App = new Realm.App({ id: "lifeplanner-givvz" });
    const credentials = Realm.Credentials.anonymous();
    try {
      // Authenticate the user
      const user: Realm.User = await app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
      assert(user.id === app.currentUser.id);
      console.log(user);
      return user
    } catch (err) {
      console.error("Failed to log in", err);
    }
  }
}
