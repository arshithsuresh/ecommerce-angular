import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/product-card/product';

@Component({
  selector: 'app-product-long-card',
  templateUrl: './product-long-card.component.html',
  styleUrls: ['./product-long-card.component.scss']
})
export class ProductLongCardComponent implements OnInit {

  @Input('data') product:Product;
  constructor() { 
    this.product = Product.getMockProduct();
  }

  ngOnInit(): void {
  }

  halfStarVisibility=()=>{
    return !(Math.floor(this.product.rating)==this.product.rating) && this.product.rating<5;
  }

  createRange(range:number){
    range = Math.min(Math.floor(range),5);    
    return new Array(range).fill(0)
      .map((n, index) => index + 1);
  }

}
