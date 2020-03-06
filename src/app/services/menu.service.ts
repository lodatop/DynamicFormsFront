import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoadingController } from '@ionic/angular';
import { Response } from '../models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url = environment.url;
  constructor( private http: HttpClient, private loadingCtrl: LoadingController) { }

  getMenus(){
    const serverUrl = this.url;
    return this.http.get<Response>(`${serverUrl}/menu`);
  }

  getMenusWithoutParents(){
    const serverUrl = this.url;
    return this.http.get<Response>(`${serverUrl}/dashboard`);
  }

  deleteMenu(menuid: string){
    const serverUrl = this.url;
    const id = menuid;
    return this.http.get<Response>(`${serverUrl}/${id}/delete`);
  }

  getMenusByParent(menuid: string){
    const serverUrl = this.url;
    const id = menuid;
    return this.http.get<Response>(`${serverUrl}/${id}`);
  }

  createMenu(title: string, description: string, parent: string){
    const body = {
      title: title,
      description: description,
      parent: parent
    };
    const serverUrl = this.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Response>(`${serverUrl}/menu`, JSON.stringify(body), httpOptions);
  }
}
