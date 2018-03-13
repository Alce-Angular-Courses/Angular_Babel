import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosMockComponent } from './libros-mock.component';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../servicios/books.service';

describe('LibrosMockComponent', () => {
  let component: LibrosMockComponent;
  let fixture: ComponentFixture<LibrosMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosMockComponent ],
      imports: [ FormsModule ],
      providers: [BooksService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
