import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

// export class HeroeComponent implements OnInit {
//     constructor() { }

//     ngOnInit() { }
// }
export class HeroeComponent {
    nombre: String = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre() {
        this.nombre = 'spiderman';
    }

    cambiarEdad() {
        this.edad = 69;
    }
}