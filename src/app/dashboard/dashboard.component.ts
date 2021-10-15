import { Component, OnInit } from '@angular/core';
import {ClientsService} from "./clients/clients.service";
import {OffersService} from "./offers/offers.service";
import {DestinationsService} from "./destinations/destinations.service";
import {CountryService} from "./destinations/add-edit-delete-destination/add-edit-delete-country/country.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedClient: any = undefined;
  selectedOffer: any = undefined;
  selectedDestination: any = undefined;
  selectedCountry: any = undefined;



  constructor(private clientsService: ClientsService,
              private offersService: OffersService,
              private destinationsService: DestinationsService,
              private countryService: CountryService) {
  }

  ngOnInit(): void {
  }

  onReceiveClient(id: number) {
    this.clientsService.getById(id).subscribe((response: any) => {
        this.selectedClient = {
          id: response.id,
          firstName: response.firstName,
          lastName: response.lastName,
          username: response.username,
          email: response.email,
          retypePassword: '',
          password: ''
        };
      },
      (error) => {
        console.log('error onReceiveClient');
      });
    console.log(this.selectedClient);
  }

  onReceiveOffer(id: number) {

    this.offersService.getById(id).subscribe((response: any) => {
        console.log('response');
        console.log(response);
        this.selectedOffer = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  onReceiveDestination(id: number) {
    this.destinationsService.getById(id).subscribe((response: any) => {
        console.log('response');
        console.log(response);
        this.selectedDestination = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  onReceiveCountry(id: number) {
    this.countryService.getCountryById(id).subscribe((response: any) => {
        console.log('response');
        console.log(response);
        this.selectedCountry = response;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

}
