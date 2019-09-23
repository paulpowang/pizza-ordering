import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodItemsService {
  private baseUrl = 'http://localhost:8080/api/foodItems';

  constructor(private http: HttpClient) {}

  getFoodItemsByStoreId(storeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/byStoreID/${storeId}`);
  }

  getAllFoodItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
