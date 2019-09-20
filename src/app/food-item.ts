import { Store } from './store';
import { ShoppingCart } from './shopping-cart';

export class FoodItem {
  foodItemId: number;
  price: number;
  name: string;
  pizzaStore: Set<Store>;
  shoppingCarts: Array<ShoppingCart>;
}
