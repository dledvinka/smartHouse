import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuredValuesComponent } from './measured-values.component';

describe('MeasuredValuesComponent', () => {
  let component: MeasuredValuesComponent;
  let fixture: ComponentFixture<MeasuredValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasuredValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuredValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
