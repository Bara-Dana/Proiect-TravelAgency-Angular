import {Injectable} from "@angular/core";
import {ClientModel} from "../../models/client-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private clients: Array<ClientModel> = [];


  constructor(private http:HttpClient) {}

  public create(data: ClientModel) {
    return this.http.post(`${environment.apiUrl}/user/addUser`, data);
  }

  public update(data: ClientModel) {
    return this.http.put(`${environment.apiUrl}/user/editUser`, data);

  }

  public delete(clientId: number) {
    return this.http.delete(`${environment.apiUrl}/user/deleteUser/${clientId}`);
  }

  public get() {

    return this.http.get(`${environment.apiUrl}/user/getUsers`);
  }

  public getById(clientId: number) {

    return this.http.get(`${environment.apiUrl}/user/getUserById/${clientId}`);
  }



}
