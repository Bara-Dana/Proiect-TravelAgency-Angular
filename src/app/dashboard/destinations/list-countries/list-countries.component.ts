import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CountryModel} from "../../../models/country-model";
import {CountryService} from "../add-edit-delete-destination/add-edit-delete-country/country.service";

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  @Output() onSelect: EventEmitter<number>;
  countries: Array<CountryModel> = [];

  constructor(private countryService: CountryService) {
    this.onSelect = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((response: any) => {
        console.log(response);
        this.countries = response;
      },
      (error: any) => {
        console.log('error');
        console.log(error);
      });
  }

  onSelectCountry(id: number) {
    this.onSelect.emit(id);
  }

}
