import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FoodItemsService } from '../services/food-items.service';
import { FoodItem } from '../models/food-item';

@Component({
  selector: 'app-food-item-form',
  templateUrl: './food-item-form.component.html',
  styleUrls: ['./food-item-form.component.css'],
})
export class FoodItemFormComponent implements OnInit {
  @Input('storeId') storeId: number;
  allFoodItems: Array<FoodItem> = [];
  shoppingCartItems: Array<FoodItem> = [];
  @Output() shoppingCartEmitter = new EventEmitter<Array<FoodItem>>();

  constructor(private foodItemsService: FoodItemsService) {}

  ngOnInit() {
    this.foodItemsService.getAllFoodItems().subscribe((array: Array<any>) => {
      this.allFoodItems = array.map(obj => new FoodItem(obj));
    });
  }

  addToCart(foodItem: FoodItem) {
    this.shoppingCartItems.push(foodItem);
  }

  submitShoppingCart(): void {
    this.shoppingCartEmitter.emit(this.shoppingCartItems);
  }
}
