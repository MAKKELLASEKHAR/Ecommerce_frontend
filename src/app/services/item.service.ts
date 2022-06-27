import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Item } from '../model/item';



@Injectable({

  providedIn: 'root'

})

export class ItemService {

 itemUrl:string= 'http://localhost:8282/item/additem';

  constructor(private http:HttpClient) { }




  addItem(item:Item):Observable<Item>{

    return this.http.post<Item>(this.itemUrl, item);

  }



}