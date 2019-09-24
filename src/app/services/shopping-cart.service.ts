import { ShoppingCart } from './../models/shopping-cart';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private baseUrl = "http://localhost:8080/api/shoppingcarts"

  constructor(private http: HttpClient) { }
  //GET
  getShoppingCarts(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  //GET
  getShoppingCartById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  //POST
  saveShoppingCartDetail(shoppingCart: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/save`, shoppingCart);
  }
  //PUT
  updateShoppingCartDetail(shoppingCartId: number, value:any): Observable<any>{
    return this.http.put(`${this.baseUrl}/update/${shoppingCartId}`, value);
  }

  //DELETE
  deleteShoppingCartDetail(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`)
  }


}
