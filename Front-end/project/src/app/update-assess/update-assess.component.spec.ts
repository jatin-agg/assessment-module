import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssessComponent } from './update-assess.component';

describe('UpdateAssessComponent', () => {
  let component: UpdateAssessComponent;
  let fixture: ComponentFixture<UpdateAssessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAssessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
