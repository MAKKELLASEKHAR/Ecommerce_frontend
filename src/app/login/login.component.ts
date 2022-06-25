import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!:User;
  loginForm!: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
      
    }
<<<<<<< HEAD
    this.apiService.login(loginPayload).subscribe(data => {
      // debugger;
=======
    this.apiService.login(loginPayload).subscribe((data:any) => {
      //debugger;
>>>>>>> 9a4a3af026e569fab73146ebc9281d66b345a80a
      if(data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
        
        
        console.log(data.result.username);
        this.getUser(data.result.username);
        //  this.router.navigate(['home']);
         
      }else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required],
      
    });
  }

  getUser(name:string) {
    this.apiService.getUsername(name).subscribe(data=>{this.user=data;
    console.log(data.result.role);
    window.localStorage.setItem('editCustomerId', data.result.id);
  if(data.result.role==='USER')
     this.router.navigate(['home'])
  else if(data.result.role==='VENDOR')
     this.router.navigate(['vendorhome'])
    });

  }

 

}
