import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoComponent } from './hijo.component';
import { FormsModule } from '@angular/forms';

describe('HijoComponent', () => {
  let component: HijoComponent;
  let fixture: ComponentFixture<HijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
