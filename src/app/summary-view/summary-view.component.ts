import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Creditcard } from '../checkout/creditcard/creditcard';
import { CreditcardService } from '../checkout/creditcard/creditcard.service';
import { Router } from '@angular/router';
import { Shipment } from '../checkout/shipment/shipment';
import { ShipmentService } from '../checkout/shipment/shipment.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css']
})
export class SummaryViewComponent implements OnInit {

  shipment: Shipment;
  creditcard: Creditcard;
  
  


  constructor(private router: Router, 
    private creditcardService: CreditcardService,
    private shipmentService: ShipmentService,
    private location: Location) { }

  ngOnInit() {
    this.creditcardService.getCreditcardByCardId().subscribe(creditcard => {
      this.creditcard = creditcard;
    });
    this.shipmentService.getShipmentByShipId().subscribe(shipment => {
      this.shipment = shipment;
    });
  }

  back(){
    this.location.back();
  }

  toPlaceOrder(){
    this.router.navigate(['/thankyou']);
  }

}
