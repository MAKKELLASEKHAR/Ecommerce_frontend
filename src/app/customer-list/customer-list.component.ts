import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerApiService } from '../core/customerApi.service';
import { Customer } from '../model/customer.model';


@Component({
  // selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers!: Customer[];

  constructor(private router: Router, private apiService: CustomerApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.viewAllCustomer()
      .subscribe( data => {
          this.customers = data.result;
      });
  }

  addCustomer(): void {
    this.router.navigate(['register']);
  };

  deleteCustomer(customer: Customer): void {
    this.apiService.deleteCustomer(customer.id)
      .subscribe( data => {
        this.customers = this.customers.filter(c => c !== customer);
      })
  };

  editCustomer(customer: Customer): void {
    window.localStorage.removeItem("editCustomerId");
    window.localStorage.setItem("editCustomerId", customer.id.toString());
    this.router.navigate(['update-customer']);
  };
  

}
