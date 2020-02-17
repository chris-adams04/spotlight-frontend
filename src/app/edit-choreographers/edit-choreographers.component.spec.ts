import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChoreographersComponent } from './edit-choreographers.component';

describe('EditChoreographersComponent', () => {
  let component: EditChoreographersComponent;
  let fixture: ComponentFixture<EditChoreographersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChoreographersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChoreographersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
