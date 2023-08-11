import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.css']
})
export class RankingPageComponent implements OnInit {
  scoreType: string = 'standard';
  positionType: string = 'overall';

  searchBarText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  receiveSelectionEvent(selection: string): void {
    selection = selection.toLowerCase();
    if(selection === 'standard' || selection === 'ppr') {
      this.scoreType = selection;
    }
    else {
      this.positionType = selection;
    }
  }

  receiveInputText(userInput: string): void {
    this.searchBarText = userInput;
  }
}