import {Injectable} from "@angular/core";
import {CountryModel} from "../../../../models/country-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countries: Array<CountryModel> = [];

  constructor(private http: HttpClient) {

  }

  public getCountries() {

    return this.http.get(`${environment.apiUrl}/country/getCountries`);
  }

  public createCountry(data: any) {

    return this.http.post(`${environment.apiUrl}/country/addCountry`, data);
  }

  public updateCountry(data: any) {
    return this.http.put(`${environment.apiUrl}/country/editCountry/${data.id}`, data);
  }

  public deleteCountry(countryId: number) {
    return this.http.delete(`${environment.apiUrl}/country/deleteCountry/${countryId}`);
  }

  public getCountryById(countryId: number) {
    return this.http.get(`${environment.apiUrl}/country/getCountryById/${countryId}`);
  }
}
