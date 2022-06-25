import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../core/cart.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items!:Item[];
  totalBill:number=0;
  // ngOnInit(): void {
  // }

  constructor(private router:Router,private cartService : CartService){}
  
  ngOnInit(){
    this.items = this.cartService.getProducts()
  }
  computeTotal():number{ 
    this.items.forEach(a=>this.totalBill+=a.item_price);
    return this.totalBill;
  }
  onClick(): void {
    this.computeTotal();
    // this.router.navigate(['app-payment'])

}
}