import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private shoppingCart: ShoppingCart;
  creditCardDetails: Array<CreditCardDetail> = [];
  shipmentDetails: Array<ShipmentDetail> = [];
  private creditCardId: number; // The chosen credit card
  private shippingId: number; // The chosen shippingDetails

  constructor(private http: HttpClient) {}

  /**
   * Initialize all necessary information for a transaction,
   * should be called right after a user is authenticated
   */
  fetchUserInfo(userId: string) {
    this.userId = userId;
    this.http.get(`${this.userApi}/${this.userId}`).subscribe(res => {
      this.shoppingCart = new ShoppingCart();
      this.creditCardDetails = res['creditCardDetails'];
      this.shipmentDetails = res['shippingDetails'];
    });
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

  addShipmentDetail(shipmentDetail: ShipmentDetail) {
    this.http.post(`${this.userApi}/${this.userId}/addShipmentDetail`, shipmentDetail).subscribe(
      () => {
        this.creditCardDetails.push(shipmentDetail);
      },
      error => {
        console.log(error);
      }
    );
  }

  addCreditCardDetail(creditCardDetail: CreditCardDetail) {
    this.http
      .post(`${this.userApi}/${this.userId}/addCreditCardDetail`, creditCardDetail)
      .subscribe(
        () => {
          this.creditCardDetails.push(creditCardDetail);
        },
        error => {
          console.log(error);
        }
      );
  }

  setFoodItemQuantity(foodItem: FoodItem, quantity: number): void {
    this.shoppingCart.setShoppingCartItemQuantity(foodItem, quantity);
  }

  getShoppingCartItems(): Array<ShoppingCartItem> {
    return this.shoppingCart.shoppingCartItems;
  }

  save(): Observable<any> {
    return this.http.post(`${this.userApi}/user/${this.userId}/addOrder`, this.shoppingCart, {
      params: new HttpParams()
        .set('creditCardId', this.creditCardId.toString())
        .set('shippingId', this.shippingId.toString()),
    });
  }
}
