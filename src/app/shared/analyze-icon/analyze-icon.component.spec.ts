import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeIconComponent } from './analyze-icon.component';

describe('AnalyzeIconComponent', () => {
  let component: AnalyzeIconComponent;
  let fixture: ComponentFixture<AnalyzeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzeIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
