import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosComponent } from './libros.component';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { LibrosBuscarComponent } from './libros-buscar/libros-buscar.component';
import { LibrosByServiceComponent } from './libros-by-service/libros-by-service.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { BooksService } from '../servicios/books.service';
import { HttpClientModule } from '@angular/common/http';
import { GbooksService } from '../servicios/gbooks.service';

describe('LibrosComponent', () => {
  let component: LibrosComponent;
  let fixture: ComponentFixture<LibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LibrosComponent,
        LibrosMockComponent,
        LibrosBuscarComponent,
        LibrosByServiceComponent
       ],
       imports: [
         FormsModule,
         HttpClientModule,
         PipesModule
       ],
       providers: [
         BooksService,
         GbooksService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
