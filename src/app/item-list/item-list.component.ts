import { Component, OnInit } from '@angular/core';
import { ItemService } from '../core/Item.service';
import { Item } from '../model/item';
import { CartService } from '../core/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
 
  items!:Item[];
    constructor(private router:Router,private apiService: ItemService,private cartservice: CartService) { }

  ngOnInit(): void {
   this.viewData() 
  }
  viewData():void{
    this.apiService.viewAllItem()
    .subscribe( data => {
        console.log(data);
      this.items = data;

    
    });
  }
  
  add(item:Item):void {
    this.cartservice.add(item);
    this.router.navigate(['app-cart']);
  }

}