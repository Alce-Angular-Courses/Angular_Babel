import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosByServiceComponent } from './libros-by-service.component';

describe('LibrosByServiceComponent', () => {
  let component: LibrosByServiceComponent;
  let fixture: ComponentFixture<LibrosByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosByServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
