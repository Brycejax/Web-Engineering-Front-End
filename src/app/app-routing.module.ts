import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import {ProductsComponent} from './products/products.component';
import {AdminComponent} from './admin/admin.component';
import{RegisterComponent} from './auth/register/register.component';
import{ContactComponent} from './contact/contact.component';
import{AboutComponent} from './about/about.component';
import{ServicesComponent} from './services/services.component';
import{CartComponent} from './cart/cart.component';
import{ PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {
  path : 'login',
  component:LoginComponent
  },
  {
  path : 'products',
  component:ProductsComponent
  },
  {
    path : '',
    component:ProductsComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: 'services',
  component: ServicesComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path:'checkout',
    component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
