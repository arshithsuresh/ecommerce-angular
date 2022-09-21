import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart-service/cart.service';
import { Product } from './product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('data') product:Product;
  constructor(private cartService:CartService) { 
    this.product=Product.getMockProduct();
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

  onAddToCart():void{
    this.cartService.addItemToCart(this.product.productID);
  }
}
