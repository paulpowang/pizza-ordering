import { Store } from './store';

export class FoodItem {
  foodItemId: number;
  name: string;
  price: number;
  pizzaStores: Set<Store>;

  constructor({ foodItemId, name, price, pizzaStores }) {
    this.foodItemId = foodItemId;
    this.name = name;
    this.price = price;
    this.pizzaStores = pizzaStores;
  }
}
