import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerApiService } from '../core/customerApi.service';

@Component({
  // selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addCustomerForm!:FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: CustomerApiService) { }

 

  ngOnInit(): void {
    this.addCustomerForm= this.formBuilder.group({
      // id: [],
      // first_name: new FormControl('',Validators.required),
      // last_name: new FormControl('',Validators.required),
      // email: new FormControl('',Validators.required),
      // gender: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      // mobile_number: new FormControl('',Validators.required),
      role: new FormControl('',Validators.required)


    })
  }

    onSubmit() {
      this.apiService.customerRegistration(this.addCustomerForm.value)
        .subscribe( data => {
          console.log(data)
          this.router.navigate(['']);
        });
    }

    
  

}


