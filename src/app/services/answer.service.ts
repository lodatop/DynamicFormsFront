import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoadingController } from '@ionic/angular';
import { Response } from '../models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  url = environment.url;
  constructor( private http: HttpClient, private loadingCtrl: LoadingController) { }

  getAnswer(formid: string) {
    const serverUrl = this.url;
    const formId = formid;
    return this.http.get<Response>(`${serverUrl}/form/${formId}/answer`);
  }

  createAnswer(formid: string, data: object) {
    const formId = formid;
    const body = {
        data: data
    };
    const serverUrl = this.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Response>(`${serverUrl}/form/${formId}/answer`, JSON.stringify(body), httpOptions);
  }

  deleteAnswer(formid: string) {
    const formId = formid;
    const serverUrl = this.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Response>(`${serverUrl}/form/${formId}/answer/delete`, httpOptions);
  }
}
