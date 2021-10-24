import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DestinationModel} from "../../../models/destination-model";
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
    this.onSelect = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.destinationsService.getDestination().subscribe((response: any) => {
        console.log(response);
        this.destinations = response;

      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  onSelectDestination(id: number){
    this.onSelect.emit(id);
  }

}
