import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchoreographersComponent } from './addchoreographers.component';

describe('AddchoreographersComponent', () => {
  let component: AddchoreographersComponent;
  let fixture: ComponentFixture<AddchoreographersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchoreographersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchoreographersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
