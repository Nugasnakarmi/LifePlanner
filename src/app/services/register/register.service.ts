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

  var res = await this.app.emailPasswordAuth.registerUser(email, password);
  console.log(res);
 }

 async confirmUser( token: string, tokenId:string){
  await this.app.emailPasswordAuth.confirmUser({ token, tokenId });


 }
}
