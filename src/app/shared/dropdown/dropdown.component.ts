import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() dropDownOptions: string[] = [];
  active: boolean = false;
  selected: string = '';

  constructor() { }

  ngOnInit(): void {
    this.selected= this.dropDownOptions[0];
  }

  toggleActive(): boolean {
    return this.active = !this.active;
  }

  toggleSelected(event: Event): void {
    this.selected = (event.target as HTMLInputElement).textContent!;
    console.log((event.target as HTMLInputElement).textContent);
    // console.log(event.target.textContent);
  }
}
