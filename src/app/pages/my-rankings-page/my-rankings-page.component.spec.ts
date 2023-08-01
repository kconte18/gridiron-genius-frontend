import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRankingsPageComponent } from './my-rankings-page.component';

describe('MyRankingsPageComponent', () => {
  let component: MyRankingsPageComponent;
  let fixture: ComponentFixture<MyRankingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRankingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRankingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
