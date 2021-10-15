import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(data: any) {
    return this.httpClient.post(`${environment.apiUrl}/auth/login`,data);

  }

  public register(data: any){
    return this.httpClient.post(`${environment.apiUrl}/auth/register`, data, httpOptions);

  }

  public forgotPassword(data: any){
    return this.httpClient.post(`${environment.apiUrl}/auth/forgot-password`, data)
  }
}
