import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoadingController } from '@ionic/angular';
import { Response } from '../../models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  option: number = 0;
  url = environment.url;
  constructor( private http: HttpClient, private loadingCtrl: LoadingController) { }

  deleteForm(formid: string){
    const serverUrl = this.url;
    const formId = formid;
    return this.http.get<Response>(`${serverUrl}/form/${formId}/delete`, {withCredentials: true});
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
      }),
      withCredentials: true
    };
    return this.http.post<Response>(`${serverUrl}/menu/${menuId}/form`, JSON.stringify(body), httpOptions);
  }

  getForms(){
    const serverUrl = this.url;
    return this.http.get<Response>(`${serverUrl}/form/`, {withCredentials: true});
  }

  getOption(){
    return this.option;
  }

  setOption(newOption){
    this.option = newOption;
  }
}
