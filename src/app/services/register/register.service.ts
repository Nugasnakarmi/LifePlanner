import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }
  app: Realm.App = new Realm.App({ id: environment['realm-app-id']});
  
  async registerUser( email, password): Promise<any>{

 return await this.app.emailPasswordAuth.registerUser(email, password);
 }
}
