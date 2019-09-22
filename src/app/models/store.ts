import { FoodItem } from './food-item';

export class Store {
  storeId: number;
  storeName: string;
  city: string;
  state: string;
  zipCode: string;
  foodItems: Set<FoodItem>;

  constructor({ storeId, storeName, city, state, zipCode, foodItems }: any) {
    this.storeId = storeId || null;
    this.storeName = storeName || null;
    this.city = city || null;
    this.state = state || null;
    this.zipCode = zipCode || null;
    this.foodItems = foodItems || null;
  }
}
