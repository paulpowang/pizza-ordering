import { ShoppingCartItem } from './../models/shopping-cart-item';
import { Injectable } from '@angular/core';
import { FoodItem } from '../models/food-item';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  shoppingCartItems: ShoppingCartItem[] = [
    new ShoppingCartItem(1, new FoodItem({ foodItemId: 1, name: "food1", price: 1, pizzaStores: null})), 
    new ShoppingCartItem(2, new FoodItem({ foodItemId: 3, name: "food2", price: 2, pizzaStores: null})), 
    new ShoppingCartItem(3, new FoodItem({ foodItemId: 3, name: "food3", price: 3, pizzaStores: null})), 
  ]; 

  constructor() { }

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
