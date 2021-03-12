import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Goku', 'Thor', 'Spiderman', 'Ironman'];
  heroe: string = '';
  
  borrarHeroe():void{
    this.heroe = this.heroes.shift() || '';
  }
}
