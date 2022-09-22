import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product-card/product';
import { HomepageDataService } from './homepagedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[HomepageDataService]
})
export class HomeComponent implements OnInit {

  shoppingTrendProducts: Product[]=[ new Product(
    "-1",
    "Product Not Available",            
    0, //Rating
    0, //No. Rating
    "",
    0, // Rate
    false,            
    4, //Stock
    "assets/img/placeholders/product.png"
)];
  featuredProducts: Product[]=[];
  browsingHistorys: Product[]=[];

  constructor(private homedata: HomepageDataService) { 

  }

  ngOnInit(): void {
    this.homedata.getInitData();
    this.homedata.homepageDataChanged.subscribe(value=>{
      this.featuredProducts = this.homedata.featuredProducts;
      this.shoppingTrendProducts = this.homedata.shoppingTrendProducts;
    });
  }

}
