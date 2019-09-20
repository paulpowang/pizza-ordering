import { Store } from './store';
import { ShoppingCart } from './shopping-cart';

export class FoodItem {
  foodItemId: number;
  price: number;
  name: string;
  pizzaStores: Set<Store>;
  shoppingCarts: Array<ShoppingCart>;

  constructor({ foodItemId, price, name, pizzaStores, shoppingCarts }) {
    this.foodItemId = foodItemId;
    this.price = price;
    this.name = name;
    this.pizzaStores = pizzaStores;
    this.shoppingCarts = shoppingCarts;
  }
}
