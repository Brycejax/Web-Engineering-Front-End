import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public email: string  = "";
public password: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    //if already logged in
    if(localStorage.getItem('user')){
      this.router.navigate(['/products'])
    }
  }

  login(){
    //this should be done in the backend or firebase
    //and encrypt your password
    if((this.email == "bjmartin@mail.lipscomb.edu" || "aenordhoff@mail.lipscomb.edu") && this.password == "password"){
      localStorage.setItem("user", this.email);
      this.router.navigate(['/admin']);
    }
    else
    {
      this.router.navigate(['/login']);
    }

  }

  register(){
    this.router.navigate(['/register']);
  }

}
