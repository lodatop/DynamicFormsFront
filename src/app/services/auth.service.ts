import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoadingController } from '@ionic/angular';
import { Response } from '../models/Response.model';
import {map, tap} from 'rxjs/operators';


import {BehaviorSubject, from} from 'rxjs';
import { Plugins } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url;

  private userObservable = new BehaviorSubject<any>(null);
  constructor( private http: HttpClient, private loadingCtrl: LoadingController) { }

  get user() {
    return this.userObservable.asObservable();
  }

  get userIsAuthenticated() {
    return this.userObservable.asObservable().pipe(
        map(user => {
          if (user) {
            return user;
          } else {
            return false;
          }
        })
    );
  }

  get userIsAdmin() {
    return this.userObservable.asObservable().pipe(
        map(user => {
          if (user.admin_user) {
            return user;
          } else {
            return false;
          }
        })
    );
  }

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
    return this.http.post<Response>(`${serverUrl}/user/login`, JSON.stringify(body), httpOptions).pipe(tap(data => {
      if(data.status === 200){
      this.userObservable.next(data.data)
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
    return this.http.get<Response>(`${serverUrl}/logout`).pipe(
      tap(data => {
        this.userObservable.next(null)
        Plugins.Storage.remove({ key: 'user' });
      })
    );
    
  }

  saveUser(user: any){
    const userJSON = JSON.stringify(user);
    Plugins.Storage.set({ key: 'user', value: userJSON });
  }
}


