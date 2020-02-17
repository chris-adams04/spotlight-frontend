import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowuserbookingsComponent } from './showuserbookings.component';

describe('ShowuserbookingsComponent', () => {
  let component: ShowuserbookingsComponent;
  let fixture: ComponentFixture<ShowuserbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowuserbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowuserbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
