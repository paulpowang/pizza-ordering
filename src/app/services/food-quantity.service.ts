import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodQuantityService {
  foodItem: String;
  foodPrice: Number;

  constructor(){ }

  setFoodItem(currentFoodItem: String){
    this.foodItem = currentFoodItem;
  }

  getFoodItem(){
    return this.foodItem;
  }

  setFoodPrice(currentFoodPrice: Number){
    this.foodPrice = currentFoodPrice;
  }

  getFoodPrice() {
    return this.foodPrice
  }
}
