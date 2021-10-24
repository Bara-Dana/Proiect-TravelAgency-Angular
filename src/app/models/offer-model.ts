import {DestinationModel} from "./destination-model";

export interface OfferModel {

  imageUrl: string;
  id: number;
  title: string;
  description: string;
  pricePerNight: number;
  contactNumber: string;
  destination: DestinationModel;
}
