import { Component, OnInit } from '@angular/core';
import { Creditcard } from '../creditcard';
import { CreditcardService } from '../creditcard.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService } from 'src/app/services/order.service';
import { CreditCardDetail } from 'src/app/models/credit-card-detail';

@Component({
  selector: 'app-creditcard-add',
  templateUrl: './creditcard-add.component.html',
  styleUrls: ['./creditcard-add.component.css'],
})
export class CreditcardAddComponent implements OnInit {
  creditcard: CreditCardDetail = new CreditCardDetail();

  constructor(private service: OrderService, private router: Router, private location: Location) {}

  ngOnInit() {}

  onSubmit() {
    this.service.addCreditCardDetail(this.creditcard).subscribe(next => {
      this.service.refreshUserInfo().subscribe(res => {
        this.service.creditCardDetails = res['creditCardDetails'] || [];
        this.service.shipmentDetails = res['shipmentDetails'] || [];
      });
    });
  }

  back() {
    this.location.back();
  }
}
