import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsercredentialService {

  userid: string;
  url: string;

  private baseUrl = 'http://localhost:8080/api/signup';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getID(i: string): Observable<any> {
    this.url = '//localhost:8080/api/signup/' + i;
    return this.http.get(this.url);
  }

  getUser(userCredentialId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userCredentialId}`);
  }
  createUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }
}
