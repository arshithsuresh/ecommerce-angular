import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../shared/product-card/product';

@Injectable()
export class ProductService {

  productFetch:EventEmitter<Product> = new EventEmitter();
  constructor(private httpClient:HttpClient) {

  }

  getProductData(productid:string){
    return this.httpClient.get<Product>(`http://localhost:3000/products/${productid}`);
  }
  //.subscribe({
  //   next:(product)=>{
  //     this.productFetch.emit(product);
  //   }
  // });
}
