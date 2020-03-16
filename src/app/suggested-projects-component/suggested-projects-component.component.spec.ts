import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedProjectsComponentComponent } from './suggested-projects-component.component';

describe('SuggestedProjectsComponentComponent', () => {
  let component: SuggestedProjectsComponentComponent;
  let fixture: ComponentFixture<SuggestedProjectsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedProjectsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedProjectsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
