import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Creditcard } from '../creditcard';
import { CreditcardService } from '../creditcard.service';
import { Location } from '@angular/common';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-creditcard-edit',
  templateUrl: './creditcard-edit.component.html',
  styleUrls: ['./creditcard-edit.component.css']
})
export class CreditcardEditComponent implements OnInit {

  @Input() creditcard: Creditcard;
  submitted = false;
  constructor(private service: CreditcardService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private orderService: OrderService
              ) { }

  ngOnInit() {
    
    // Get Id
    const id = +this.route.snapshot.paramMap.get('id');
    // Get Creditcard
    this.service.getCreditcard(id)
      .subscribe(creditcard => {
        this.creditcard = creditcard;
      });

  }

  updateCreditcard(){
    this.service.updateCreditcard(this.creditcard.creditCardId,{
      creditCardNumber: this.creditcard.creditCardNumber,
      cardHolderName: this.creditcard.cardHolderName,
      validTo: this.creditcard.validTo,
      balance: this.creditcard.balance
    }).subscribe(
      data =>{
        console.log(data);
        this.creditcard = data as Creditcard;
        this.submitted = true;
        this.orderService.fetchUserInfo(this.orderService.getUserId());
      },
      error => console.log(error)
    );

    setTimeout(() => 
    {
      this.router.navigate(['/checkout']);
    },
    250);
  }// end of updateCreditcard()

  delete(){
    this.service.deleteCreditcard(this.creditcard.creditCardId)
      .subscribe(
        data => {
          console.log(data);
          this.orderService.fetchUserInfo(this.orderService.getUserId());
        },
        error => console.log(error)
      );

    setTimeout(() => 
    {
      this.router.navigate(['/checkout']);
    },
    250);
    }//end of delete()

    back() {
      this.location.back();
    }
  }







