import { Injectable, EventEmitter, Output } from '@angular/core';

interface CartItem{
  itemID: number;
  itemCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  @Output() cartUpdated :EventEmitter<String[]> =new EventEmitter();

  private cartItems: String[]=[];

  constructor() {
    console.log("Car Service initialized!")
  }

  getCartCount():number{
    let count=this.cartItems.length;    
    return count;
  }

  getCart():String[]{
    return this.cartItems.slice();
  }

  addItemToCart(itemId:String):void{
    if(itemId=="-1")
    {
      alert("Invalid Product!");
      return;
    }    
    this.cartItems.push(itemId);
    this.cartUpdated.emit(this.cartItems.slice());
  }

  removeItemFromCart(itemId:String):void{
    var index:any=-1;
    index = this.cartItems.find(item=> item == itemId);
    if(index != undefined)
    {
      this.cartItems.splice(index,1);
      this.cartUpdated.emit(this.cartItems.slice());
    }
    alert("test");
  }

}
