import {Injectable} from "@angular/core";
import {DestinationModel} from "../../models/destination-model";
import {CountryModel} from "../../models/country-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private destinations: Array<DestinationModel> = [];

  constructor(private http: HttpClient) {
  }

  public create(data: DestinationModel) {

    return this.http.post(`${environment.apiUrl}/destination/addDestination`, data);
  }

  public update(data: DestinationModel) {

    return this.http.put(`${environment.apiUrl}/destination/editDestination/${data.id}`, data);
  }

  public deleteDestination(destinationId: number) {
    return this.http.delete(`${environment.apiUrl}/destination/deleteDestination/${destinationId}`);
  }


  public getById(destinationId: number) {

    return this.http.get(`${environment.apiUrl}/destination/getDestinationById/${destinationId}`);
  }

  getDestination() {
    return this.http.get(`${environment.apiUrl}/destination/getDestinations`);
  }
}
