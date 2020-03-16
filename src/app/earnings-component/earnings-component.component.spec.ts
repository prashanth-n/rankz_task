import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsComponentComponent } from './earnings-component.component';

describe('EarningsComponentComponent', () => {
  let component: EarningsComponentComponent;
  let fixture: ComponentFixture<EarningsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
