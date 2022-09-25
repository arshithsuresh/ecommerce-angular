import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/product-card/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  @Input('data') product:Product;
  constructor() {
    this.product=Product.getMockProduct();
  }

  ngOnInit(): void {
  }

}
