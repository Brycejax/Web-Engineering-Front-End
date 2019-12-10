import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';


import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import {environment} from '../environments/environment'

import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFirestoreModule } from '@angular/fire/firestore'


// 2. Add your credentials from step 1
export const config = {
    apiKey: 'AIzaSyCFVb2zwnd5XSiasZcOiGIg14aqCvGX7fk',
    authDomain: 'web-eng-final.firebaseapp.com',
    databaseURL: 'https://web-eng-final.firebaseio.com',
    projectId: 'web-eng-final',
    storageBucket: 'web-eng-final.appspot.com',
    messagingSenderId: '958772223500'
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    FooterComponent,
    AdminComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
