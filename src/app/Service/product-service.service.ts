import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productUrl = './assets/product.json';

  constructor(private http: HttpClient) { }
  getProductDetails(){
    return this.http.get(this.productUrl);
  }
}


 

