import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output, OnInit} from '@angular/core';
import { map } from 'rxjs';
import { CartService } from '../core/cart-service/cart.service';
import { Product } from '../shared/product-card/product';


interface prodct{
  test:string;
}

@Injectable({
  providedIn: 'root'
})
export class HomepageDataService implements OnInit {

  @Output() homepageDataChanged:EventEmitter<boolean> = new EventEmitter();

  shoppingTrendProducts: Product[]=[];
  featuredProducts: Product[]=[];
  browsingHistorys: Product[]=[];

  constructor(private httpClient:HttpClient, private cartService:CartService) {
    
  }

  ngOnInit(): void {    
  }

  getInitData(){

    this.httpClient.get<{[key:string]: Product[]}>("http://localhost:3000/initdata")
    .pipe(map((responseData)=>{
      let fPosts:Product[] = [];
      let tPosts:Product[] = [];
      for(const key in responseData["featuredproduct"])
      {        
        if(responseData["featuredproduct"].hasOwnProperty(key))
        fPosts = responseData["featuredproduct"];
      }

      for(const key in responseData["trendproducts"])
      {
        if(responseData["trendproducts"].hasOwnProperty(key))
        tPosts = responseData["trendproducts"];
      }
      return {
        "featuredproduct" : fPosts,
        "trendproducts" : tPosts
      }      
    }))
    .subscribe(
      (responseData)=>{
        this.featuredProducts = responseData["featuredproduct"];
        this.shoppingTrendProducts = responseData["trendproducts"];
        this.homepageDataChanged.emit(true);
      },
      (error)=>{
        alert("Unable to fetch data!")
      }    
    );
  }
}
