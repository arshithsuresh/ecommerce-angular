import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../core/cart-service/cart.service';
import { Product } from '../shared/product-card/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  providers:[ProductService]
})
export class ProductPageComponent implements OnInit {

  product:Product;
  productId:string="";


  reviewRating:number = 0;

  constructor(private route:ActivatedRoute, 
    private cartService:CartService, 
    private productService:ProductService) 
  {
    this.product=Product.getMockProduct();     
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['pid'];
    this.productService.getProductData(this.productId).subscribe((product)=>{
      this.product = product;
  });   
    
  }
  onAddToCart(){
    this.cartService.addItemToCart(this.product.id);
  }

  addRating(rating:number){
    this.reviewRating = rating;    
  }

}
