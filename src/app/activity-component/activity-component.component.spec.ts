import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComponentComponent } from './activity-component.component';

describe('ActivityComponentComponent', () => {
  let component: ActivityComponentComponent;
  let fixture: ComponentFixture<ActivityComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
