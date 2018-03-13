import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreComponent } from './padre.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from '../hijo/hijo.component';

describe('PadreComponent', () => {
  let component: PadreComponent;
  let fixture: ComponentFixture<PadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PadreComponent,
        HijoComponent
       ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
