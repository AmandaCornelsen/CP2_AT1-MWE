import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio3.component.html',
  styleUrl: './exercicio3.component.css'
})
export class Exercicio3Component {
  idade: number = 1;

  maiorDeIdade() : void {
    this.idade++;
  }

  menorDeIdade() : void {
    this.idade--;
  }

  trocarIdade (event: Event): void {
    const elemento = event.target as HTMLInputElement;
    this.idade = parseInt(elemento.value, 10);
  }
}
