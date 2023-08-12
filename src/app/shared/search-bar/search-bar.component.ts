import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() textEvent= new EventEmitter<string>(); 

  focus: boolean = false;

  inputText: string = '';
  timerToSend: any;

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!(this.eRef.nativeElement.contains(event.target)) && this.focus == true) {
      this.toggleFocus();
    }
    if((this.eRef.nativeElement.contains(event.target)) && this.focus == false) {
      this.toggleFocus();
    }
  }
  
  toggleFocus(): void {
    this.focus = !this.focus;
  }

  sendInputText(): void {
    // clearTimeout(this.timerToSend)
    // this.startTimerToSend();
    this.textEvent.emit(this.inputText);
  }

  // startTimerToSend(): void {
  //   this.timerToSend = setTimeout(() => { 
  //       this.textEvent.emit(this.inputText);
  //   }, 500);
  // }
}
