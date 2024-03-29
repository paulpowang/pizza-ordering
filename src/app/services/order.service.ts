import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

import { ShoppingCart } from '../models/shopping-cart';
import { FoodItem } from '../models/food-item';
import { ShoppingCartItem } from '../models/shopping-cart-item';
import { CreditCardDetail } from '../models/credit-card-detail';
import { ShipmentDetail } from '../models/shipment-detail';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly userApi: string = 'http://localhost:8080/api/user';

  private userId: string;
  shoppingCart: ShoppingCart = new ShoppingCart();
  creditCardDetails: Array<CreditCardDetail> = [];
  shipmentDetails: Array<ShipmentDetail> = [];
  creditCardId: number; // The chosen credit card
  shippingId: number; // The chosen shippingDetails

  constructor(private http: HttpClient) {}

  /**
   * Initialize all necessary information for a transaction,
   * should be called right after a user is authenticated
   */
  fetchUserInfo(userId: string) {
    this.userId = userId;
    this.http.get(`${this.userApi}/${this.userId}`).subscribe(res => {
      this.shoppingCart = new ShoppingCart();
      this.creditCardDetails = res['creditCardDetails'] || [];
      this.shipmentDetails = res['shipmentDetails'] || [];
    });
  }

  refreshUserInfo() {
    return this.http.get(`${this.userApi}/${this.userId}`);
  }

  /**
   * Update creditCardDetails
   */
  fetchCreditCardDetails() {
    this.http
      .get(`${this.userApi}/${this.userId}/getCreditCardDetails`)
      .subscribe((res: Array<CreditCardDetail>) => {
        this.creditCardDetails = res;
      });
  }

  /**
   * Update creditCardDetails
   */
  fetchShipmentDetails() {
    this.http
      .get(`${this.userApi}/${this.userId}/getShipmentDetails`)
      .subscribe((res: Array<ShipmentDetail>) => {
        this.shipmentDetails = res;
      });
  }

  addShipmentDetail(shipmentDetail: ShipmentDetail): Observable<Object> {
    return this.http.post(`${this.userApi}/${this.userId}/addShipmentDetail`, shipmentDetail);
  }

  addCreditCardDetail(creditCardDetail: CreditCardDetail) {
    return this.http.post(`${this.userApi}/${this.userId}/addCreditCardDetail`, creditCardDetail);
  }

  setFoodItemQuantity(foodItem: FoodItem, quantity: number): void {
    this.shoppingCart.setShoppingCartItemQuantity(foodItem, quantity);
  }

  setShoppingCartItems(shoppingCartItems: Array<ShoppingCartItem>) {
    this.shoppingCart.shoppingCartItems = shoppingCartItems;
    console.log(this.shoppingCart);
  }

  getShoppingCartItems(): Array<ShoppingCartItem> {
    return this.shoppingCart.shoppingCartItems;
  }

  save(): Observable<any> {
    return this.http.post(`${this.userApi}/${this.userId}/addOrder`, this.shoppingCart, {
      params: new HttpParams()
        .set('creditCardId', this.creditCardId.toString())
        .set('shippingId', this.shippingId.toString()),
    });
  }

  getUserId() {
    return this.userId;
  }
}
