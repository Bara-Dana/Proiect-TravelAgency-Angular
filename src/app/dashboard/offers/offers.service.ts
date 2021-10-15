import {Injectable} from "@angular/core";
import {OfferModel} from "../../models/offer-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offers: Array<OfferModel> = [];
  id: number = 1;

  constructor(private http: HttpClient) {

  }

  public create(data: OfferModel) {


    return this.http.post(`${environment.apiUrl}/offers/addOffer`, data);
  }

  public update(data: OfferModel) {
    console.log("data");
    console.log(data);
    return this.http.put(`${environment.apiUrl}/offers/editOffer/${data.id}`, data);
  }

  public delete(offerId: number) {

    return this.http.delete(`${environment.apiUrl}/offers/deleteOffer/${offerId}`);
  }

  public get() {

    return this.http.get(`${environment.apiUrl}/offers/getOffers`);
  }

  public getById(offerId: number) {

    return this.http.get(`${environment.apiUrl}/offers/getOfferById/${offerId}`);
  }

  public buyOffer(offerId: number, userId: number) {
    return this.http.post(`${environment.apiUrl}/offers/buyOffer`, {offerId: offerId, userId: userId});
  }
  public searchOfferByPrice(destinationId: number){
    return this.http.get(`${environment.apiUrl}/offer/searchOffer/${destinationId}`);
  }
}
