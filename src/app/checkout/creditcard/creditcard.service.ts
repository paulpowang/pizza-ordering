import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  private baseUrl = 'http://localhost:8080/api/creditcards';

  private cardId:number;

  constructor(private http: HttpClient) { }

  getCreditcardsList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getCreditcard(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createCreditcard(creditcard: any): Observable<any> {
    return this.http.post(this.baseUrl+"/save", creditcard);
  }
 
  updateCreditcard(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }
 
  deleteCreditcard(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  setCardId(cardId: number): void{
    this.cardId = cardId;
  }

  getCreditcardByCardId(): Observable<any>{
    return this.http.get(`${this.baseUrl}/${this.cardId}`);
  }


 
  
}
