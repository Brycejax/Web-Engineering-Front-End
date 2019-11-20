import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {AdminComponent} from './admin/admin.component';
import{RegisterComponent} from './register/register.component';
import{ContactComponent} from './contact/contact.component';
import{AboutComponent} from './about/about.component';
import{ServicesComponent} from './services/services.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
