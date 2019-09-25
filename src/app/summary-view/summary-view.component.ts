import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Creditcard } from '../checkout/creditcard/creditcard';
import { CreditcardService } from '../checkout/creditcard/creditcard.service';
import { Router } from '@angular/router';
import { Shipment } from '../checkout/shipment/shipment';
import { ShipmentService } from '../checkout/shipment/shipment.service';
import { Location } from '@angular/common';


export interface TempItem {
  name: string;
  price: number;
  qty: number;
  total: number;
}

const test_data: TempItem[] = [
  {name: 'Pineapple Pizza', price: 5.00, qty: 1, total: 5},
  {name: 'Coke',            price: 1.00, qty: 2, total: 2},
  {name: 'Peperoni Pizza',  price: 5.00, qty: 1, total: 5},
];


@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css']
})


export class SummaryViewComponent implements OnInit {


//userCredential: UserCredential
email: string;


//shoppingCartItems: List<ShoppingCartItem>
shoppingCartItems = test_data;
displayedColumns: string[] = ['name', 'price', 'qty', 'total'];

//calculate this somehow
total: number;



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

    this.total = 12231323.00;
  }

  back(){
    this.location.back();
  }

  toPlaceOrder(){
    this.router.navigate(['/thankyou']);
  }

}
