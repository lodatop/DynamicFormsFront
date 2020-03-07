import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoadingController } from '@ionic/angular';
import { Response } from '../models/Response.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url;
  constructor( private http: HttpClient, private loadingCtrl: LoadingController) { }

  onLogin(username: string , password: string) {
          const body = {
              password: password,
              username: username
          };
          const serverUrl = this.url;
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
         return this.http.post<Response>(`${serverUrl}/user/login`, JSON.stringify(body), httpOptions);
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
      })
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
      })
    };
   return this.http.post<Response>(`${serverUrl}/user/registerAdmin`, JSON.stringify(body), httpOptions);
  }

  onUpdate(username: string, password: string, name: string, age: number, gender: string) {
    const body = {
        password: password,
        username: username,
        name: name,
        age: age,
        gender: gender
    };
    const serverUrl = this.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
   return this.http.post<Response>(`${serverUrl}/profile/update`, JSON.stringify(body), httpOptions);
  }

  onLogout() {
    const serverUrl = this.url;
    return this.http.get<Response>(`${serverUrl}/logout`);
  }
}


