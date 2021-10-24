import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserModel} from "../models/user-model";
import {LoginModel} from "../models/login-model";



const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' };

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient) {
}
  public login(data: LoginModel) {
    return this.httpClient.post(`${environment.apiUrl}/auth/login`,data)
  };



  public register(data: any){
    return this.httpClient.post(`${environment.apiUrl}/auth/register`, data, httpOptions);

  }

  public forgotPassword(data: any){
    return this.httpClient.post(`${environment.apiUrl}/auth/forgot-password`, data)
  }
}
