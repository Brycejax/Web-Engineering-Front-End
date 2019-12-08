import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  name: string = "";
  price: number = 0;
  desc: string = "";
  picture: string = "";

  products: any[];



  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getallproducts()
  }

  getallproducts() {
    this.productsService.getallproducts().subscribe(
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
