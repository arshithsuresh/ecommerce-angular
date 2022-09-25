import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  rating:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  halfStarVisibility=()=>{
    return !(Math.floor(this.rating)==this.rating) && this.rating<5;
  }

  createRange(range:number){
    range = Math.min(Math.floor(range),5);    
    return new Array(range).fill(0)
      .map((n, index) => index + 1);
  }

}
