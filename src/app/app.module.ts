import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ApiService } from './core/api.service';
import { TokenInterceptor } from './core/interceptor';
import { ListUserComponent } from './list-user/list-user.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UpdateCustomerComponent,
    ListUserComponent,
    CustomerListComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

