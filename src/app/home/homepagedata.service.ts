import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../shared/product-card/product';

@Injectable({
  providedIn: 'root'
})
export class HomepageDataService {

  shoppingTrendProducts: Product[]=[];
  featuredProduct: Product[]=[];
  browsingHistory: Product[]=[];

  constructor(private httpClient:HttpClient) {
    
  }

  getInitData(){
    this.httpClient.get("http://localhost:3000/initdata")
    .pipe(map((responseData:any)=>{
      //const f_products: Product[];
      //f_products = 
      console.log(responseData["featuredproduct"]);
      return responseData;
    }))
    .subscribe(
      (responseData:)=>{
        //console.log(responseData["featuredproduct"]);
      },      
    );
  }
}
