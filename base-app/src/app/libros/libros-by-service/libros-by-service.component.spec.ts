import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosByServiceComponent } from './libros-by-service.component';
import { FormsModule } from '@angular/forms';
import { GbooksService } from '../../servicios/gbooks.service';
import { HttpClientModule } from '@angular/common/http';

describe('LibrosByServiceComponent', () => {
  let component: LibrosByServiceComponent;
  let fixture: ComponentFixture<LibrosByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LibrosByServiceComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [
        GbooksService
      ]
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
