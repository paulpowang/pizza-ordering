import { CartServicesService } from './../services/cart-services.service';
import { Component, OnInit, Output } from '@angular/core';
import { ShoppingCartItem } from '../models/shopping-cart-item';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartItems: ShoppingCartItem[] = [];
  modifyActivated: boolean = false; 
  oldQuantity: number;
  newShoppingCartItem: ShoppingCartItem; 
  index: number;
  shippingId: number = 0;
  constructor(private shoppingCartService: CartServicesService) { }

  ngOnInit() {
    this.shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
    if(!this.shippingId)
      this.shippingId = 1;
    else
      this.shippingId++;
  }

  deleteItem(sc: ShoppingCartItem){
    this.modifyActivated = false;
    const index = this.shoppingCartItems.indexOf(sc);
    console.log(index);
    delete this.shoppingCartItems[index];
  }

  modifyItem(sci: ShoppingCartItem){
    this.modifyActivated= true;
    this.newShoppingCartItem = sci;
    this.index = this.shoppingCartItems.indexOf(sci);
    this.oldQuantity = sci.quantity;
  }

  onSubmit(){
    this.modifyActivated = false;
    this.shoppingCartItems[this.index].quantity = this.oldQuantity;
  }
}
