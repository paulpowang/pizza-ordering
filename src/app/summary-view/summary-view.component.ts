import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Creditcard } from '../checkout/creditcard/creditcard';
import { CreditcardService } from '../checkout/creditcard/creditcard.service';
import { Router } from '@angular/router';
import { Shipment } from '../checkout/shipment/shipment';
import { ShipmentService } from '../checkout/shipment/shipment.service';
import { Location } from '@angular/common';
import { OrderService } from '../services/order.service';
import { ShoppingCartItem } from '../models/shopping-cart-item';
import { ShoppingCart } from '../models/shopping-cart';


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
username:string;

//shoppingCartItems: List<ShoppingCartItem>
shoppingCartItems: Array<ShoppingCartItem>;
displayedColumns: string[] = ['name', 'price', 'qty', 'total'];

//calculate this somehow
total: number;



  shipment: Shipment;
  creditcard: Creditcard;
  shoppingCart: ShoppingCart;
  
  constructor(private router: Router, 
    private creditcardService: CreditcardService,
    private shipmentService: ShipmentService,
    private orderService: OrderService,
    private location: Location) { }

  ngOnInit() {


    this.creditcardService.getCreditcardByCardId().subscribe(creditcard => {
      this.creditcard = creditcard;
    });
    this.shipmentService.getShipmentByShipId().subscribe(shipment => {
      this.shipment = shipment;

    });

    this.shoppingCart = this.orderService.shoppingCart;
    this.shoppingCartItems = this.shoppingCart.shoppingCartItems;

    this.total = this.shoppingCart.getTotalCost();

    this.email = this.orderService.getUserId();
    this.username = this.email.split("@")[0];

  }

  back(){
    this.location.back();
  }

  toPlaceOrder(){
    this.router.navigate(['/thankyou']);
  }

}
