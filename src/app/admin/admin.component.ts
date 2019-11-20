import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name: string = "";
  price: number = 0;
  desc: string = "";
  picture: string = "";

  edit_mode: boolean = false;

  products: any[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getallproducts()
  }
  getallproducts() {
    this.adminService.getAllProducts().subscribe(
      data => {
        this.products = data;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }


}
