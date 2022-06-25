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

  viewAllCustomer():Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getCustomerById(id:number):Observable<any> {
    return this.http.get<any>(this.baseUrl+'/' + id);
  }

  customerRegistration(customer:Customer):Observable<any> {
    return this.http.post<any>(this.baseUrl2, customer);
  }

  updateCustomer(customer:Customer):Observable<any> {
    return this.http.put<any>(this.baseUrl, customer);
  }
  

  deleteCustomer(id:number):Observable<any> {
    return this.http.delete<any>(this.baseUrl+'/' + id);
  }
}