import { Component, OnInit } from '@angular/core';
// @ts-ignore
import initAnimation from './ranking-icon-animation.js';

@Component({
  selector: 'app-ranking-icon',
  templateUrl: './ranking-icon.component.html',
  styleUrls: ['./ranking-icon.component.css']
})
export class RankingIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initAnimation();
  }

}
