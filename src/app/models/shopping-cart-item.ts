import { FoodItem } from './food-item';
import { ShoppingCart } from './shopping-cart';

export class ShoppingCartItem {
  quantity: number;
  foodItem: FoodItem;
  shoppingCart: ShoppingCart;

  constructor(quantity: number, foodItem: FoodItem) {
    this.foodItem = foodItem;
    this.quantity = quantity;
  }
}
