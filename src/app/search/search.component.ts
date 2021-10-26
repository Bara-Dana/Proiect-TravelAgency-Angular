import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "./search.service";
import {OfferModel} from "../models/offer-model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  offers: Array<OfferModel> = [];

  constructor(private formBuilder: FormBuilder,
              private searchService: SearchService) {
    this.searchForm = this.formBuilder.group({
      selection: ['1'],
      searchCriteria: ['', Validators.minLength(1)]
    });
  }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.searchForm.value)
    this.searchService.search(this.searchForm.value).subscribe((response: any) => {
        console.log(response);
        this.offers = response;

      },
      (error: any) => {
        console.log('error');
        console.log(error);
      });
  }
}
