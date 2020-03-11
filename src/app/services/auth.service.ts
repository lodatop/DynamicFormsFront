import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoadingController } from '@ionic/angular';
import { Response } from '../models/Response.model';
import { map, tap } from 'rxjs/operators';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url;

  userData: any;
  constructor( private http: HttpClient, private loadingCtrl: LoadingController) { }

  async userIsLoged(){
    const ret = await Storage.get({key:'user'});
    const user = JSON.parse(ret.value);
    this.userData = user;
    return user;
  }

  getUserData(){
    return this.userData;
  }

  userIsAdmin(){
    return this.userData.admin_user;
  }

  // async logout(){
  //   await Storage.clear();
  // }

  // async login(){
  //   this.saveUser({name_user: "Wisam", username_user: "wisim", admin_user: true})
  // }

  onLogin(username: string , password: string) {
    const body = {
        password: password,
        username: username
    };
    const serverUrl = this.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true
    };
    return this.http.post<Response>(`${serverUrl}/user/login`, JSON.stringify(body), httpOptions).pipe(tap(data => {
      if(data.status === 200){
        this.saveUser(data.data)
      }
    }));
  }

  onRegister(name: string, username: string , email: string, password: string, age: number, gender: string) {
    const body = {
        password: password,
        username: username,
        name: name,
        email: email,
        age: age,
        gender: gender
    };
    const serverUrl = this.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true
    };
   return this.http.post<Response>(`${serverUrl}/user/register`, JSON.stringify(body), httpOptions);
  }

  onAdminRegister(name: string, username: string , email: string, password: string, age: number, gender: string) {
    const body = {
        password: password,
        username: username,
        name: name,
        email: email,
        age: age,
        gender: gender
    };
    const serverUrl = this.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true
    };
   return this.http.post<Response>(`${serverUrl}/user/registerAdmin`, JSON.stringify(body), httpOptions);
  }

  onUpdate(username: string, name: string, email: string, age: number, gender: string) {
    const body = {
        email: email,
        username: username,
        name: name,
        age: age,
        gender: gender
    };
    const serverUrl = this.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true
    };
   return this.http.post<Response>(`${serverUrl}/profile/update`, JSON.stringify(body), httpOptions);
  }

  onLogout() {
    const serverUrl = this.url;
    return this.http.get<Response>(`${serverUrl}/logout`, {withCredentials: true}).pipe(
      tap(data => {
        Storage.clear();
        // Storage.remove({ key: 'user' });
        this.userData = "";
      })
    );
  }

  async saveUser(user: any){
    const userJSON = JSON.stringify(user);
    await Storage.set({ key: 'user', value: userJSON });
    // const { value } = await Storage.get({key:'user'});
    // this.userData = JSON.parse(value);
  }
}