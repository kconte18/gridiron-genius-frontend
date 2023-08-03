import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() dropDownOptions: string[] = [];
  @Output() selectionEvent = new EventEmitter<string>();
  
  active: boolean = false;
  selected: string = '';

  constructor(private eRef: ElementRef) { }
  
  ngOnInit(): void {
    this.selected= this.dropDownOptions[0];
  }
  
  // @HostListener('document:click', ['$event'])
  // clickout(event: Event) {
  //   console.log(event.target)
  //   if(!(this.eRef.nativeElement.contains(event.target)) && this.active) {
  //     this.toggleActive();
  //   } 
  // }

  toggleActive(): boolean {
    return this.active = !this.active;
  }

  toggleSelected(event: Event): void {
    this.selected = (event.target as HTMLInputElement).textContent!;
    this.sendSelection();
  }

  sendSelection(): void {
    this.selectionEvent.emit(this.selected);
  }
}
