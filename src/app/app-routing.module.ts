import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {AdminComponent} from './admin/admin.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
