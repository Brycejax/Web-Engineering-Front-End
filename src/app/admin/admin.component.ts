import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name: string = "";
  type: string = "";
  price: number = 0;
  stock: number = 0;
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

  addproducts() {
    const products = {
      name: this.name,
      type: this.type,
      stock: this.stock,
      price: this.price,
      picture: this.picture
    }

    this.adminService.addNewProducts(products).subscribe(
      data=> {
        console.log("Product has been submitted successfully");
        console.log(data);
        this.getallproducts();
      },
      error=> {
        console.log("Recieved an error");
        console.log(error);
      }
    )
  }
  updateProducts(products: any){
    this.edit_mode = false;
    this.adminService.updateProducts(products, products._id).subscribe(
      data => {
        alert("Product was updated successfully")
      },
      error=> {
        alert("Got an Error");
      }
    )
  }

  deleteproducts(products: any){
    this.adminService.deleteProducts(products, products._id).subscribe(
      data=> {
        alert("products was deleted")
      },
      error=> {
        alert("error. could not delete. must have DB authentication");
      }
    )
  }

  edit(item:any){
    this.edit_mode = true;
  }


}
