import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() totalBill:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onCheck4():void {
    alert('payment recevied')
    

}
}
