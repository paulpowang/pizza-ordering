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
  styleUrls: ['./creditcard-add.component.css']
})
export class CreditcardAddComponent implements OnInit {

  creditcard: CreditCardDetail = new CreditCardDetail();;

  constructor(private service: OrderService, 
              private router: Router,
              private location: Location) { }

  ngOnInit() {
  }

  save(){
    
    this.service.addCreditCardDetail(this.creditcard);

  }

  onSubmit(){
    this.save();
    setTimeout(() => 
    {
      this.router.navigate(['/checkout']);
    },
    250);
  }

  back() {
    this.location.back();
  }

}
