import { Injectable, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private BACKEND_URL = "http://localhost:5050/products"
  private ORDER_BACKEND = "http://localhost:5050/orders"

  constructor(private http: HttpClient) { }

 //retrieve all products from BACKEND_URL

getAllProducts(): Observable <any[]> {
  return this.http.get<any[]>(this.BACKEND_URL);
}

addNewProducts(product: any): Observable<any> {
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  return this.http.post(this.BACKEND_URL, product , options);
}

updateProducts(data: any, id:string): Observable<any>{

  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  return this.http.put(this.BACKEND_URL + "/" + id, data, options);
}

//retrieving all orders for our admin page

getAllOrders(): Observable<any[]> {
  return this.http.get<any[]>(this.ORDER_BACKEND);
}

//adding orders to test
addNewOrders(order: any):Observable<any> {
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  return this.http.post(this.ORDER_BACKEND, order, options);
}

//updating orders if we need to
updateOrders(data: any, id:string): Observable<any> {
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application.json'
    })
  }
  return this.http.put(this.ORDER_BACKEND + "/" + id, data, options);
}

}
