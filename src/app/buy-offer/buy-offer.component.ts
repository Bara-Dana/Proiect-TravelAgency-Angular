import {Component, Inject, OnInit} from '@angular/core';
import {ClientModel} from "../models/client-model";
import {OfferModel} from "../models/offer-model";
import {ClientsService} from "../dashboard/clients/clients.service";
import {OffersService} from "../dashboard/offers/offers.service";
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-buy-offer',
  templateUrl: './buy-offer.component.html',
  styleUrls: ['./buy-offer.component.css']
})
export class BuyOfferComponent implements OnInit {


  users: Array<ClientModel> = [];
  selectedUserId: number = -1;
  private dialog: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { offer: OfferModel },
              private clientsService: ClientsService,
              private offerService: OffersService,
              public dialogRef: MatDialogRef<BuyOfferComponent>,
              private router: Router,
              public userService: UserService) {
    console.log(data);

  }

  ngOnInit(): void {

    this.dialog.updateSize('65%')
    this.clientsService.get().subscribe((response: any) => {
        for (let i = 0; i < response.length; i++) {
          let client: ClientModel = {
            id: response[i].id,
            firstName: response[i].firstName,
            lastName: response[i].lastName,
            username: response[i].username,
            email: response[i].email,
            retypePassword: '',
            password: ''
          };
          this.users.push(client);
        }
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  confirmOffer() {
    this.offerService.buyOffer(this.data.offer.id, this.selectedUserId).subscribe((response: any) => {
        console.log(response);
        this.dialogRef.close();
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
    console.log(this.data.offer.id);
    console.log(this.selectedUserId);
    this.router.navigateByUrl('/home')
  }

  login() {
    this.dialogRef.close();
    this.router.navigateByUrl('/auth');
  }

}
