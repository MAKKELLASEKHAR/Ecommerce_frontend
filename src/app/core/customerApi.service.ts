import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../model/customer.model";
import { ApiResponse } from "../model/api.response";




@Injectable({
  providedIn:'root'
})
export class CustomerApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8282/customer';
  baseUrl2: string = 'http://localhost:8282/users';

  login(loginPayload:any) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8282/' + 'token/generate-token', loginPayload);
  }

  viewAllCustomer() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getCustomerById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  customerRegistration(customer: Customer): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl2, customer);
  }

  updateCustomer(customer: Customer): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}