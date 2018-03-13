import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosBuscarComponent } from './libros-buscar.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';

describe('LibrosBuscarComponent', () => {
  let component: LibrosBuscarComponent;
  let fixture: ComponentFixture<LibrosBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosBuscarComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        PipesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
