import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url: string;

  private baseUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {
  }

  login(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${email}`);
  }

}
