import { FoodItem } from './food-item';

export class ShoppingCartItem {
  foodItem: FoodItem;
  quantity: number;

  constructor(foodItem: FoodItem, quantity: number) {
    this.foodItem = foodItem;
    this.quantity = quantity;
  }
}
