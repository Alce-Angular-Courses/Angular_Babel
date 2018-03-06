
interface FullName {
    nombre: string;
    apellidos: string;
}

class FullNameCl {
    constructor (
        public nombre: string,
        public apellidos: string) {}
}


class User {

/*     public nombre: string;
    private apellidos: string;
    private edad: number;
    private genero: any; 

    constructor  (nombre, apellidos, edad, genero) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.genero = genero;
    } */

    constructor  (public fullName: FullName,
                public fullNameCl: FullNameCl,
                private edad: number | string,
                private genero: string) {}

        saludar () {
            console.log (` Hola, soy ${this.fullName.nombre}
            ya somos muchos`);
        }
}


/* class Alumno extends User {
    curso;
    constructor(nombre, apellidos, edad, genero, curso) {
        super(nombre, apellidos, edad, genero);
        this.curso = curso;
    }

    saludar () {
        console.log (` Hola, soy ${this.nombre}
        ya somos muchos`);
    }
} */

let oUser1 = new User(    new FullNameCl('Juan', 'Lopez'),
                        {nombre: 'Juan', apellidos: 'Lopez'},
                        12, 'H');


oUser1.saludar();
console.log(oUser1);
/*
oAlumno1 = new Alumno ("Felipe", "Martinez", 33, "H", "Angular");
oAlumno1.notas = [9, 8, 10];
oAlumno1.saludar();
console.log(oAlumno1);

oAlumno2 = new Alumno ("Luis", "Gomez", 33, "H", "Angular");
console.log(oAlumno2); */


