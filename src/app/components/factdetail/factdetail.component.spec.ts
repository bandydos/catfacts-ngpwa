import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactdetailComponent } from './factdetail.component';

describe('FactdetailComponent', () => {
  let component: FactdetailComponent;
  let fixture: ComponentFixture<FactdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
