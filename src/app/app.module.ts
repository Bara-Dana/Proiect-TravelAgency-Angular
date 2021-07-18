import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BuyOfferComponent } from './buy-offer/buy-offer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditDeleteClientsComponent } from './dashboard/clients/add-edit-delete-clients/add-edit-delete-clients.component';
import { ListClientsComponent } from './dashboard/clients/list-clients/list-clients.component';
import { PreviewClientComponent } from './dashboard/clients/preview-client/preview-client.component';
import { AddEditDeleteDestinationComponent } from './dashboard/destinations/add-edit-delete-destination/add-edit-delete-destination.component';
import { AddEditDeleteCountryComponent } from './dashboard/destinations/add-edit-delete-country/add-edit-delete-country.component';
import { CountryPreviewComponent } from './dashboard/destinations/country-preview/country-preview.component';
import { ListCountriesComponent } from './dashboard/destinations/list-countries/list-countries.component';
import { ListDestinationsComponent } from './dashboard/destinations/list-destinations/list-destinations.component';
import { PreviewDestinationsComponent } from './dashboard/destinations/preview-destinations/preview-destinations.component';
import { AddEditDeleteOfferComponent } from './dashboard/offers/add-edit-delete-offer/add-edit-delete-offer.component';
import { ListOffersComponent } from './dashboard/offers/list-offers/list-offers.component';
import { PreviewOfferComponent } from './dashboard/offers/preview-offer/preview-offer.component';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NavigationToolbarComponent } from './navigation-toolbar/navigation-toolbar.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    BuyOfferComponent,
    DashboardComponent,
    AddEditDeleteClientsComponent,
    ListClientsComponent,
    PreviewClientComponent,
    AddEditDeleteDestinationComponent,
    AddEditDeleteCountryComponent,
    CountryPreviewComponent,
    ListCountriesComponent,
    ListDestinationsComponent,
    PreviewDestinationsComponent,
    AddEditDeleteOfferComponent,
    ListOffersComponent,
    PreviewOfferComponent,
    HomeComponent,
    MyAccountComponent,
    NavigationToolbarComponent,
    UserComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
     // AuthModule,
    MatFormFieldModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatToolbarModule,
    RouterModule,
    MatInputModule,
  ],
  entryComponents: [BuyOfferComponent],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
