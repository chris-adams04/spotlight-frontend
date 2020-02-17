import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowchoreographersComponent } from './showchoreographers.component';

describe('ShowchoreographersComponent', () => {
  let component: ShowchoreographersComponent;
  let fixture: ComponentFixture<ShowchoreographersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowchoreographersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowchoreographersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
