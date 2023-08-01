import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsTableComponent } from './rankings-table.component';

describe('RankingsTableComponent', () => {
  let component: RankingsTableComponent;
  let fixture: ComponentFixture<RankingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
