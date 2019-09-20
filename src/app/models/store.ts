import { FoodItem } from './food-item';

export class Store {
  storeId: number;
  storeName: string;
  city: string;
  state: string;
  zipCode: string;
  foodItems: Set<FoodItem>;
}
