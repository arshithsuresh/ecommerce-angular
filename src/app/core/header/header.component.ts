import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  accountDropdown:boolean = false;
  cartItemCount:number=0;

  constructor(private cartService:CartService) { }

  toggleDropdown():void{
    this.accountDropdown = !this.accountDropdown;
    console.log("Click");
  }

  ngOnInit(): void {
    this.cartService.cartUpdated.subscribe((cartItems)=>this.cartItemCount=cartItems.length);
  }

}
