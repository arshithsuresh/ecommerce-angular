import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/cart-service/cart.service';
import { Product } from '../shared/product-card/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  items:String[]=["Asd"];
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items=this.cartService.getCart();
    this.cartService.cartUpdated.subscribe((items)=>this.items = items)    
  }

}
