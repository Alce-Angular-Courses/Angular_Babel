import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicsComponent } from './comunics.component';

describe('ComunicsComponent', () => {
  let component: ComunicsComponent;
  let fixture: ComponentFixture<ComunicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
