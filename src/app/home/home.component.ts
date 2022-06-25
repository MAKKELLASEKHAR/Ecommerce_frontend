import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  price1: number = 1999;
  price2: number = 999;
  price3: number = 1499;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClick(): void {
    this.router.navigate(['list-user'])
  }
  onTouch(): void {
    this.router.navigate(['update-customer'])
  }
  onCheck():void {
    this.router.navigate(['cart-list'])
  }

  // onCheck1():void {
  //   this.router.navigate(['update-customer'])
  // }
  
}









