import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoadingController } from '@ionic/angular';
import { Response } from '../models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  url = environment.url;
  constructor( private http: HttpClient, private loadingCtrl: LoadingController) { }

  deleteForm(formid: string){
    const serverUrl = this.url;
    const formId = formid;
    return this.http.get<Response>(`${serverUrl}/form/${formId}/delete`);
  }

  createForm(menuid: string, title: string, description: string){
    const menuId = menuid;
    const body = {
      title: title,
      menu: menuId,
      description: description
    };
    const serverUrl = this.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Response>(`${serverUrl}/menu/${menuId}/form`, JSON.stringify(body), httpOptions);
  }
}
