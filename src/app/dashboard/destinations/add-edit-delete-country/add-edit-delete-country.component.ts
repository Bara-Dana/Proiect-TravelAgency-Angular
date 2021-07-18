import {Component, Input, OnInit} from '@angular/core';
import {CountryModel} from "../../../modules/country-model";
import {ContinentModel} from "../../../modules/continent-model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DestinationsService} from "../destinations.service";
import {Constants} from "../../../utils/constants";

@Component({
  selector: 'app-add-edit-delete-country',
  templateUrl: './add-edit-delete-country.component.html',
  styleUrls: ['./add-edit-delete-country.component.css']
})
export class AddEditDeleteCountryComponent implements OnInit {

  @Input() country: CountryModel | undefined;
  continents: Array<ContinentModel> = [];
  selectedContinent: ContinentModel | undefined ;
  form: FormGroup;

  constructor(private destinationsService: DestinationsService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      continent: [null]
    })
  }

  ngOnInit(): void {
    this.continents = Constants.CONTINENTS;
  }

  onSubmit(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      if (this.form.controls['id'].value == null) {
        this.destinationsService.create(this.form.value).subscribe((response:any) => {
          console.log(response);
        }, (error: any) => {
          console.log('error from server');
          console.log(error);
        });
      } else {
        this.destinationsService.update(this.form.value).subscribe((response:any) => {
          console.log(response);
        }, (error: any) => {
          console.log('error from server');
          console.log(error);
        });
      }

    } else {
      alert('The country form is invalid!');
    }
  }

}
