import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "../model/api.response";
import { Cart } from "../model/cart.model";

@Injectable({
  providedIn:'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8282/cart';

  login(loginPayload:any) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8282/' + 'token/generate-token', loginPayload);
  }

  viewAllCart() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  addToCart(cart: Cart): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, cart);
  }

  deleteCart(cart_id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + cart_id);
  }
}