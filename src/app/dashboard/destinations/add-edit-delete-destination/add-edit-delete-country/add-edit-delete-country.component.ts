import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Constants} from "../../../../utils/constants";
import {CountryService} from "./country.service";
import {CountryModel} from "../../../../models/country-model";
import {ContinentModel} from "../../../../models/continent-model";

@Component({
  selector: 'app-add-edit-delete-country',
  templateUrl: './add-edit-delete-country.component.html',
  styleUrls: ['./add-edit-delete-country.component.css']
})
export class AddEditDeleteCountryComponent implements OnInit {

  @Input() country: CountryModel | undefined;
  continents: Array<ContinentModel> = [];
  selectedContinent: ContinentModel | undefined;
  form: FormGroup;

  constructor(private countryService: CountryService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      continent: ['']
    })
  }

  ngOnInit(): void {
    this.continents = Constants.CONTINENTS;
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      if (this.form.controls['id'].value == null) {
        this.countryService.createCountry(this.form.value).subscribe((response: any) => {
          console.log(response);
        }, (error) => {
          console.log('error from server');
          console.log(error);
        });
      } else {
        this.countryService.updateCountry(this.form.value).subscribe((response: any) => {
          console.log(response);
        }, (error) => {
          console.log('error from server');
          console.log(error);
        });
      }
    } else {
      alert('The destination form is invalid!');
    }
  }

  onDelete(): void {
    this.countryService.deleteCountry(this.form.value.id).subscribe((response: any) => {
      console.log(response);
    }, (error: any) => {
      console.log('error from server');
      console.log(error);
    });
  }
}
