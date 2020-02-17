import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsadminComponent } from './bookingsadmin.component';

describe('BookingsadminComponent', () => {
  let component: BookingsadminComponent;
  let fixture: ComponentFixture<BookingsadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
