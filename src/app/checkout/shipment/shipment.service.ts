import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

 
  private baseUrl = 'http://localhost:8080/api/shipments';

  constructor(private http: HttpClient) { }

  getShipmentsList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getShipment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createShipment(shipment: any): Observable<any> {
    return this.http.post(this.baseUrl+"/save", shipment);
  }
 
  updateShipment(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }
 
  deleteShipment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
 
}
