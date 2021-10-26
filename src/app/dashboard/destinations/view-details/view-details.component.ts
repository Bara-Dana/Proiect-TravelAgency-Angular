import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DestinationModel} from "../../../models/destination-model";
import {DestinationsService} from "../destinations.service";
import {Router} from "@angular/router";

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
              private router: Router,


              ) {
    console.log(data);
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('100%', '100%')


  }

  back() {
    this.dialogRef.close();
    this.router.navigateByUrl('/home')
  }
}



