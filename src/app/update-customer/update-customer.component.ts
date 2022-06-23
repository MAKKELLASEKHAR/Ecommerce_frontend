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

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: CustomerApiService) { }

  ngOnInit() {
    let customerId = window.localStorage.getItem("editCustomerId");
    if(!customerId) {
      alert("Invalid action.")
      this.router.navigate(['customer-list']);
      return;
    }
    this.updatecustomer = this.formBuilder.group({
      id: [],
      first_name: new FormControl('',Validators.required),
      last_name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      mobile_number: new FormControl('',Validators.required),
      role: new FormControl('',Validators.required)
     
    });
    this.apiService.getCustomerById(+customerId)
      .subscribe( data => {
        this.updatecustomer.setValue(data.result);
      });
  }

  onSubmit() {
    this.apiService.updateCustomer(this.updatecustomer.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Customer updated successfully.');
            this.router.navigate(['customer-list']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
