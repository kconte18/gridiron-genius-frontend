import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isHoverRanking: boolean = false;
  isHoverAnalyze: boolean = false;

  screenWidth: number = 0;
  screenHeight: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight;
  }

  hoverRankingIsTrue(): void {
    if(this.screenWidth > 820){
      this.isHoverRanking = true;
    }
  }

  hoverRankingIsFalse(): void {
    if(this.screenWidth > 820) {
      this.isHoverRanking = false;
    }
  }

  hoverAnalyzeIsTrue(): void {
    if(this.screenWidth > 820) {
      this.isHoverAnalyze = true;
    }
  }

  hoverAnalyzeIsFalse(): void {
    if(this.screenWidth > 820) {
      this.isHoverAnalyze = false;
    }
  }
}
