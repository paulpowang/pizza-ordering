import { ShoppingCartItem } from './shopping-cart-item';
import { FoodItem } from './food-item';

export class ShoppingCart {
  private shoppingCartItems: Array<ShoppingCartItem> = [];

  setShoppingCartItemQuantity(foodItem: FoodItem, quantity: number): void {
    let index: number = this.shoppingCartItems.findIndex(
      item => foodItem.foodItemId === item.foodItem.foodItemId
    );

    if (quantity === 0 && index !== -1) {
      // Delete a foodItem if the user wants a quantity of 0
      delete this.shoppingCartItems[index];
    } else if (quantity > 0 && index === -1) {
      // Add an new foodItem
      this.shoppingCartItems.push(new ShoppingCartItem(quantity, foodItem));
    } else if (index > -1) {
      // Set a new quantity for an existing shoppingCartItem
      this.shoppingCartItems[index].quantity = quantity;
    }
  }

  getTotalCost(): number {
    let sum = 0;
    for (const shoppingCartItem of this.shoppingCartItems) {
      sum += shoppingCartItem.quantity * shoppingCartItem.foodItem.price;
    }
    return sum;
  }
}
