import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {OfferModel} from "../models/offer-model";
import {Router} from "@angular/router";
import {SearchModel} from "../models/search-model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SearchService{
  searchOffers : Array<OfferModel> = [];

  constructor(private http: HttpClient,
              private router: Router) { }

public search(data: SearchModel){
    return this.http.post(`${environment.apiUrl}/search`,data)
}
}
