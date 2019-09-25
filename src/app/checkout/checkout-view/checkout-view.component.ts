import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Creditcard } from '../creditcard/creditcard';
import { CreditcardService } from '../creditcard/creditcard.service';
import { Router } from '@angular/router';
import { Shipment } from '../shipment/shipment';
import { ShipmentService } from '../shipment/shipment.service';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent implements OnInit {

  

  shipments: Observable<Shipment[]>;
  creditcards: Observable<Creditcard[]>;
  
  // cardId & shipId use for locate radio option
  cardId:number;
  shipId:number;

  constructor(private router: Router, 
              private creditcardService: CreditcardService,
              private shipmentService: ShipmentService) { }

  ngOnInit() {
    this.creditcards = this.creditcardService.getCreditcardsList();
    this.shipments = this.shipmentService.getShipmentsList();
  }

  addCreditcard(){
    this.router.navigate(['/checkout/creditcard/add']);
  }

  editCreditcard(id:number){
    this.router.navigate(['/checkout/creditcard/edit/' + id]);
  }

  addShipment(){
    this.router.navigate(['/checkout/shipment/add']);
  }

  editShipment(id:number){
    this.router.navigate(['/checkout/shipment/edit/' + id]);
  }


  back(){
    this.router.navigate(['']);

  }

  toSummary(){
    this.creditcardService.setCardId(this.cardId);
    this.shipmentService.setShipId(this.shipId);
    this.router.navigate(['/summary']);

  }

}
