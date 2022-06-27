import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CartComponent } from './cart/cart.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';

const routes: Routes = [
  {path : '', component : LoginComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'add-item', component:AddItemComponent},
  {path:'customer-list',component:CustomerListComponent},
  {path:'list-user', component: ListUserComponent },
  {path:'customer', component:CustomerComponent},
  {path:'update-customer',component:UpdateCustomerComponent},
  {path:'home', component:HomeComponent},
  {path:'vendorhome', component:VendorHomeComponent},
  {path:'adminpage', component:AdminPageComponent},
  { path: 'edit-user', component: EditUserComponent },
  {path:'Item-list', component: ItemListComponent},
  {path:'app-cart', component: CartComponent},
  {path:'app-payment', component: PaymentComponent},
  {path:'app-list',component:ListItemComponent},
  {path:'**',component:LoginComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }