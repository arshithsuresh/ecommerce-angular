import { Component, OnInit } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  product:Product;
  constructor() { 
    this.product=Product.getMockProduct();
  }

  ngOnInit(): void {
  }

  createRange(range:number){
    range = Math.min(Math.floor(range),5);    
    return new Array(range).fill(0)
      .map((n, index) => index + 1);
  }

}
