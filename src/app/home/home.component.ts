import { Component, OnInit } from '@angular/core';
import { HomepageDataService } from './homepagedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[HomepageDataService]
})
export class HomeComponent implements OnInit {

  constructor(private homedata: HomepageDataService) { 

  }

  ngOnInit(): void {
    this.homedata.getInitData();
  }

}
