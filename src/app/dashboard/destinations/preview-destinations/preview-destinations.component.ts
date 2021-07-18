import {Component, Input, OnInit} from '@angular/core';
import {DestinationModel} from "../../../modules/destination-model";

@Component({
  selector: 'app-preview-destinations',
  templateUrl: './preview-destinations.component.html',
  styleUrls: ['./preview-destinations.component.css']
})
export class PreviewDestinationsComponent implements OnInit {

  @Input() destination: DestinationModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
