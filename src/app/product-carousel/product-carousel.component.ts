import { Component, OnInit, ViewChildren,QueryList } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  @ViewChildren('cmp') components?:QueryList<any>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // print array of CustomComponent objects
    console.log(this.components?.toArray());
}

}
