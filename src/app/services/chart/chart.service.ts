import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../../models/Response.model';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChartService {
  url = environment.url;
  constructor(private http: HttpClient) {}

  getFormStadistics(){
    const serverUrl = this.url;
    // return this.http.get<Response>(`${serverUrl}/form`,  {withCredentials: true});
    return this.http.get("https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
  }

}
