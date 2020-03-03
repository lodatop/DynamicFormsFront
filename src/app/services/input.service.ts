import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoadingController } from '@ionic/angular';
import { Response } from '../models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  url = environment.url;
  constructor( private http: HttpClient, private loadingCtrl: LoadingController) { }

  getInputs(menuid: string, optionid: string){
    const serverUrl = this.url;
    const menuId = menuid;
    const optionId = optionid;
    return this.http.get<Response>(`${serverUrl}/${menuId}/${optionId}/form`);
  }

  createInput(menuid: string, optionid: string, label: string, type: string){
    const serverUrl = this.url;
    const menuId = menuid;
    const optionId = optionid;
    const body = {
      type: type,
      label: label
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Response>(`${serverUrl}/${menuId}/${optionId}/form/input`, JSON.stringify(body), httpOptions);
  }
}
