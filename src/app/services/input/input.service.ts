import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoadingController } from '@ionic/angular';
import { Response } from '../../models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  url = environment.url;
  constructor( private http: HttpClient, private loadingCtrl: LoadingController) { }

  getAllInputs(){
    const serverUrl = this.url;
    return this.http.get<Response>(`${serverUrl}/input`, {withCredentials: true});
  }

  getInputsByForm(formid: string){
    const serverUrl = this.url;
    const id = formid;
    return this.http.get<Response>(`${serverUrl}/form/${id}/input`, {withCredentials: true});
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
      }),
      withCredentials: true
    };
    return this.http.post<Response>(`${serverUrl}/input`, JSON.stringify(body), httpOptions);
  }

  addInputToForm(optionid: string, inputId: string){
    const serverUrl = this.url;
    const formId = optionid;
    const body = {
      input: inputId
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true
    };
    return this.http.post<Response>(`${serverUrl}/form/${formId}/input`, JSON.stringify(body), httpOptions);
  
  }

}
