import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  private server: string = 'http://localhost:6335/cart/';

  viewCart(): Observable<any> {
    return this.http.get(`${this.server}`);
  }

  addToCart(product: string): Observable<{ status: number; message: string }> {
    return this.http.get<{ status: number; message: string }>(
      `${this.server}${product}`
    );
  }

  doIncrement(
    product: string
  ): Observable<{ status: number; message: string }> {
    return this.http.get<{ status: number; message: string }>(
      `${this.server}increment/${product}`
    );
  }

  doDecrement(
    product: string
  ): Observable<{ status: number; message: string }> {
    return this.http.get<{ status: number; message: string }>(
      `${this.server}decrement/${product}`
    );
  }

  removeFromCart(
    product: string
  ): Observable<{ status: number; message: string }> {
    return this.http.get<{ status: number; message: string }>(
      `${this.server}delete/${product}`
    );
  }
}
