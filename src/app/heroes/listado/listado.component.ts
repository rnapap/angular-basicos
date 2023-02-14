import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['xxx', 'Hulk', 'Thor', 'Sasete', 'Goku'];
  heroeBorrado?: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift();
  }

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  flgHeroeBorrado(): boolean {
    return !(this.heroes.length == 0);
  }

}
