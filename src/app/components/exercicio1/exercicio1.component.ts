import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio1.component.html',
  styleUrl: './exercicio1.component.css'
})
export class Exercicio1Component {

  mes: number = 1;

  trocarValor(event: Event): void {
    const elemento = event.target as HTMLInputElement;
    this.mes = parseInt(elemento.value, 10);
  }

}

