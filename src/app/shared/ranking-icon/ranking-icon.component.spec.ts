import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingIconComponent } from './ranking-icon.component';

describe('RankingIconComponent', () => {
  let component: RankingIconComponent;
  let fixture: ComponentFixture<RankingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
