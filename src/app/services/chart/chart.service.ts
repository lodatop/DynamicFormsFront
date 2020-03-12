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

}
