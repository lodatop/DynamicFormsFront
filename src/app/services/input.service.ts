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

  getAllInputs(){
    const serverUrl = this.url;
    return this.http.get<Response>(`${serverUrl}/input`);
  }

  getInputsByForm(menuid: string, formid: string){
    const serverUrl = this.url;
    const menuId = menuid;
    const formId = formid;
    return this.http.get<Response>(`${serverUrl}/${menuId}/${formId}`);
  }

  createInput(label: string, type: string){
    const serverUrl = this.url;
    const body = {
      type: type,
      label: label
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Response>(`${serverUrl}/input`, JSON.stringify(body), httpOptions);
  }

  addInputToForm(menuid: string, optionid: string, inputId: string){
    const serverUrl = this.url;
    const menuId = menuid;
    const formId = optionid;
    const body = {
      input: inputId
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Response>(`${serverUrl}/${menuId}/${formId}/input`, JSON.stringify(body), httpOptions);
  
  }

  deleteInputFromForm(menuid: string, optionid: string, inputid: string){
    const serverUrl = this.url;
    const menuId = menuid;
    const formId = optionid;
    const body = {
      input : inputid
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Response>(`${serverUrl}/${menuId}/${formId}/input/delete`, JSON.stringify(body), httpOptions);
  
  }
}
