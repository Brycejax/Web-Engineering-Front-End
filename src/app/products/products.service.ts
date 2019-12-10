import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private BACKEND_URL = "http://localhost:5050/products";

  constructor(private http: HttpClient, ) { }

  //retrieve all products from the backend through http get

  getallproducts(): Observable<any[]> {
    return this.http.get<any[]>(this.BACKEND_URL);
  }

  //adding new products
  addNewProduct(product: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.getallproducts;
    return this.http.post(this.BACKEND_URL, product, options);
  }


  //updating product at given id
  updateProduct(data: any, id: string): Observable<any>{

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(this.BACKEND_URL + "/" + id, data, options);
  }
}
