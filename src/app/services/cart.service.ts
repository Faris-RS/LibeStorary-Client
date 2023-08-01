import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  private server: string = 'http://localhost:6335/cart/';

  viewCart(): Observable<any> {
    const accessToken = localStorage.getItem('userToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });
    const requestOptions = { headers: headers };
    return this.http.get(`${this.server}`, requestOptions);
  }

  addToCart(product: string, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });
    const requestOptions = { headers: headers };
    return this.http.get(`${this.server}${product}`, requestOptions);
  }
}
