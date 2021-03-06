import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OfferModel} from "../../../models/offer-model";
import {OffersService} from "../offers.service";

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})
export class ListOffersComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;
  offers: Array<OfferModel> = [];

  constructor(private offersService: OffersService) {
    this.onSelect = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.offersService.get().subscribe((response: any) => {
        console.log('response');
        console.log(response);
        this.offers = response;
      },
      (error: any) => {
        console.log('error');
        console.log(error);
      });
  }

  onSelectOffer(id: number) {
    this.onSelect.emit(id);
  }




}
