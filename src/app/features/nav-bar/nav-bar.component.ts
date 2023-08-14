import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isHover: boolean = false;

  screenWidth: number = 0;
  screenHeight: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight;
  }

  hoverIsTrue(): void {
    if(this.screenWidth > 820){
      this.isHover = true;
    }
  }

  hoverIsFalse(): void {
    if(this.screenWidth > 820) {
      this.isHover = false;
    }
  }
}
