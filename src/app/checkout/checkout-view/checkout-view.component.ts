import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Creditcard } from '../creditcard/creditcard';
import { CreditcardService } from '../creditcard/creditcard.service';
import { Router } from '@angular/router';
import { Shipment } from '../shipment/shipment';
import { ShipmentService } from '../shipment/shipment.service';
import { OrderService } from 'src/app/services/order.service';
import { ShipmentDetail } from '../../models/shipment-detail';
import { CreditCardDetail } from '../../models/credit-card-detail';
import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartItem } from '../../models/shopping-cart-item';



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
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent implements OnInit {

  

  shipments: Array<ShipmentDetail>;
  creditcards: Array<CreditCardDetail>;
  shoppingCart: ShoppingCart;


  
  // cardId & shipId use for locate radio option
  cardId:number;
  shipId:number;

  //shoppingCartItems: List<ShoppingCartItem>
shoppingCartItems: Array<ShoppingCartItem>;
displayedColumns: string[] = ['name', 'price', 'qty', 'total'];

  // total for shopping cart
  total:number;

  constructor(private router: Router, 
              private creditcardService: CreditcardService,
              private shipmentService: ShipmentService,
              private service: OrderService) { }

  ngOnInit() {
    console.log(this.service);
    
    this.shipments = this.service.shipmentDetails;
    console.log("shipments:" + this.shipments);
    console.log("service shipments" + this.service.shipmentDetails);
    this.creditcards = this.service.creditCardDetails;
    
    this.shoppingCart = this.service.shoppingCart;
    this.shoppingCartItems = this.shoppingCart.shoppingCartItems;

    this.total = this.shoppingCart.getTotalCost();
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
    console.log("ship" + this.shipId);
    console.log("card" + this.cardId);

    if(this.shipId && this.cardId){

      this.service.creditCardId = this.cardId;
    this.service.shippingId = this.shipId;
    this.creditcardService.setCardId(this.cardId);
    this.shipmentService.setShipId(this.shipId);
    this.router.navigate(['/summary']);
    }else{
      alert("please select payment and shipping address");
    }
    

  }

}
