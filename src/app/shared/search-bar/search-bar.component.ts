import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() textEvent= new EventEmitter<string>(); 

  inputText: string = '';
  timerToSend: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  sendInputText(): void {
    clearTimeout(this.timerToSend)
    this.startTimerToSend();
  }

  startTimerToSend(): void {
    this.timerToSend = setTimeout(() => { 
        this.textEvent.emit(this.inputText);
    }, 500);
  }
}
