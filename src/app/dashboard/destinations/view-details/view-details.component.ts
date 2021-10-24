import {Component, Inject, Input, OnInit} from '@angular/core';
import {CountryModel} from "../../../models/country-model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DestinationModel} from "../../../models/destination-model";
import {DestinationsService} from "../destinations.service";
import {Router} from "@angular/router";
import {CountryService} from "../add-edit-delete-destination/add-edit-delete-country/country.service";

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {




  private dialog: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { destination: DestinationModel },
              public dialogRef: MatDialogRef<ViewDetailsComponent>,
              private destinationService: DestinationsService,


              ) {
    console.log(data);
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('100%', '100%')


  }



}



