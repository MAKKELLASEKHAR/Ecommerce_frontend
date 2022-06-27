import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() totalBill:number=0;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onCheck4():void {
    alert('payment recevied')
}
onSubmit1():void {
  this.router.navigate(['home'])

}
}
