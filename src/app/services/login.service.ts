import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoadingController} from '@ionic/angular';
import {loginResponse} from '../models/loginResponse.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
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
         return this.http.post<loginResponse>(`${serverUrl}/user/login`, JSON.stringify(body), httpOptions)
}
}
