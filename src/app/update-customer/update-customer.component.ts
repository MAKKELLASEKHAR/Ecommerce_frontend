import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerApiService } from '../core/customerApi.service';
import { Customer } from '../model/customer.model';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer!: Customer;
  updatecustomer!: FormGroup;
  customerId?:any;

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: CustomerApiService) { }

  ngOnInit() {
    
     this.customerId = window.localStorage.getItem("editCustomerId");
     this.apiService.getCustomerById(this.customerId).subscribe(data=>{this.customer=data})
    if(!this.customerId ) { 
      // console.log("update-customer")
      alert("Invalid action.")
      //this.router.navigate(['customer-list']);
      return;
    }
    this.updatecustomer = this.formBuilder.group({
      id: new FormControl('',Validators.required),
      first_name: new FormControl('',Validators.required),
      last_name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      mobile_number: new FormControl('',Validators.required),

     
    });
    this.apiService.getCustomerById(this.customerId)
      .subscribe( data => {
        this.updatecustomer.setValue(data.result);
      });
  }

  onSubmit() {
    this.apiService.updateCustomer(this.updatecustomer.value)
      
      .subscribe(data => {
        if(data.status === 200) {
           this.router.navigate(['home']);
        }});
        alert('Details Updated successfully.');
        
  }
  onSubmit1():void {
    this.router.navigate(['home'])

  }
  
  

}
