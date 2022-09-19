import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  accountDropdown:boolean = false;

  constructor() { }

  toggleDropdown():void{
    this.accountDropdown = !this.accountDropdown;
    console.log("Click");
  }

  ngOnInit(): void {
  }

}
