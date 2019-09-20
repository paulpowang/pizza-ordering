import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class StoreService {
 
  private baseUrl = 'http://localhost:8080/api/stores';
 
  constructor(private http: HttpClient) { }
 
  getStore(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createStore(store: any): Observable<any> {
    return this.http.post(this.baseUrl, store);
  }
 
  updateStore(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteStore(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
 
  getStoresList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
 
  getStoresByZipCode(zipCode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/zipCode/${zipCode}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}