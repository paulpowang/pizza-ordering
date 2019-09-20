import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodItemsService {
  readonly foodItemsBaseUrl = 'http://localhost:8080/api/foodItems';

  constructor(private http: HttpClient) {}

  getFoodItemsByStoreId(storeId: number): Observable<any> {
    return this.http.get(`${this.foodItemsBaseUrl}/byStoreId/${storeId}`);
  }
}
