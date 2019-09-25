import { ShoppingCartItem } from './../models/shopping-cart-item';
import { Injectable } from '@angular/core';
import { FoodItem } from '../models/food-item';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  shoppingCartItems: ShoppingCartItem[] = []; 

  constructor() { }

  setShoppingCartItems(shoppingCartItems: ShoppingCartItem[]) {
    this.shoppingCartItems = shoppingCartItems;
  }

  addToCart(shoppingCartItem:ShoppingCartItem){
    this.shoppingCartItems.push(shoppingCartItem);
  }

  getShoppingCartItems(){
    return this.shoppingCartItems;
  }

  clearCart(){
    this.shoppingCartItems = [];
    return this.shoppingCartItems;
  }
}
