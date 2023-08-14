import { Component, OnInit } from '@angular/core';
// @ts-ignore
import initAnimation from './compare-icon-animation.js';

@Component({
  selector: 'app-compare-icon',
  templateUrl: './compare-icon.component.html',
  styleUrls: ['./compare-icon.component.css']
})
export class CompareIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initAnimation();
  }

}
