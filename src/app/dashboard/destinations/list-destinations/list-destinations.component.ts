import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DestinationModel} from "../../../modules/destination-model";
import {DestinationsService} from "../destinations.service";

@Component({
  selector: 'app-list-destinations',
  templateUrl: './list-destinations.component.html',
  styleUrls: ['./list-destinations.component.css']
})
export class ListDestinationsComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;
  destinations: Array<DestinationModel> = [];

  constructor(private destinationsService: DestinationsService) {
    this.onSelect = new EventEmitter();
  }

  ngOnInit(): void {
    this.destinationsService.get().subscribe((response: any) => {
        console.log(response);
        this.destinations = response;
      },
      (error: any) => {
        console.log('error');
        console.log(error);
      });
  }

  onSelectDestination(destinationId: number){
    this.onSelect.emit(destinationId);
  }


}
