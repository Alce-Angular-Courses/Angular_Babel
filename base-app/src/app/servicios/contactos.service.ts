import { Injectable } from '@angular/core';
import { Contacto } from '../modelos/contactos';
import { HttpClient} from '@angular/common/http';


// El servicio contactos se ocupa de almacenar la lista de contactos

const URLAPI = 'http://localhost:3000/contactos';

@Injectable()
export class ContactosService {
    private sURL: string;
    private aContactos: Array<Contacto>;

    constructor (public http: HttpClient) {
        this.sURL = URLAPI;
        this.aContactos = [];
    }

    getContactos() {
        // const aLibros: Array<string>  = [];
        return this.http.get(this.sURL).toPromise()
        .then((response: any) => {
          this.aContactos = response;
          return this.aContactos;
        });
    }

    setContactos(oContacto) {
        console.log('Enviando datos');
        console.log(oContacto);
        return this.http.post(this.sURL, oContacto).toPromise();
    }

    deleteContacto (i) {
        i++;
        return this.http.delete(this.sURL + '/' + i).toPromise();
        // this.aContactos.splice(i, 1);
      }
}

