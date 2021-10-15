import {Component, Input, OnInit} from '@angular/core';
import {BuyOfferComponent} from "../../../buy-offer/buy-offer.component";
import {MatDialog} from "@angular/material/dialog";
import {DestinationsService} from "../../destinations/destinations.service";

@Component({
  selector: 'app-preview-offer',
  templateUrl: './preview-offer.component.html',
  styleUrls: ['./preview-offer.component.css']
})
export class PreviewOfferComponent implements OnInit {

  @Input() offer: any = undefined;
  destination: any = undefined
  constructor(private dialog: MatDialog,
              private destinations: DestinationsService) { }

  ngOnInit(): void {
    console.log(this.offer);
  }

  onBuy():void {
    let dialogRef = this.dialog.open(BuyOfferComponent, { data: {offer: this.offer} });
  }


  onDetails() {

    this.destinations.getById(this.destination.id).subscribe((response: any) => {
        console.log('response');
        console.log(response);
        this.destinations = response;
      },
      (error: any) => {
        console.log('error');
        console.log(error);
      });

  }
}
