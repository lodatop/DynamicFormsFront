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

  getOptions(menuid: string){
    const serverUrl = this.url;
    const menuId = menuid;
    return this.http.get<Response>(`${serverUrl}/${menuId}/option`);
  }

  deleteOption(menuid: string, optionid: string){
    const serverUrl = this.url;
    const menuId = menuid;
    const optionId = optionid;
    return this.http.get<Response>(`${serverUrl}/${menuId}/${optionId}/delete`);
  }

  createOption(menuid: string, title: string, description: string, type: String, parent: string){
    const menuId = menuid;
    const body = {
      title: title,
      menu: menuId,
      description: description,
      type: type,
      parent: parent
    };
    const serverUrl = this.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Response>(`${serverUrl}/${menuId}/option`, JSON.stringify(body), httpOptions);
  }
}
