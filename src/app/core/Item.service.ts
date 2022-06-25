import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "../model/api.response";




@Injectable({
  providedIn:'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8282/item/viewAllItem';
  

  login(loginPayload:any) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8282/' + 'token/generate-token', loginPayload);
  }

  viewAllItem() : Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

}