import { ShoppingCartItem } from './shopping-cart-item';
import { FoodItem } from './food-item';

export class ShoppingCart {
  shoppingCartItems: Object = {};

  // Increase the quantity of foodItem by 1.
  // If the foodItem doesn't yet exist in the shoppingCart, add it.
  increaseFoodItemQuantity(foodItem: FoodItem): void {
    const id: number = foodItem.foodItemId;
    const item: ShoppingCartItem = this.shoppingCartItems[id];
    if (item) item.quantity++;
    else this.shoppingCartItems[id] = new ShoppingCartItem(1, foodItem);
  }

  // Decreases the quantity of the give foodItem by 1
  // If the foodItem quantity is 0, remove it from the shoppingCart
  decreaseFoodItemQuantity(foodItem: FoodItem): void {
    const id: number = foodItem.foodItemId;
    const item: ShoppingCartItem = this.shoppingCartItems[id];
    if (item && item.quantity === 1) delete this.shoppingCartItems[id];
    else if (item) item.quantity--;
  }

  // Used to seralize ShoppingCartItems into representation recognized by backend
  getShoppingCartItemsArray() {
    return Object.keys(this.shoppingCartItems).map(key => this.shoppingCartItems[key]);
  }
}
