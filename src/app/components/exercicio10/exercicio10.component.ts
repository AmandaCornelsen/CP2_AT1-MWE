import { Component } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio10',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './exercicio10.component.html',
  styleUrls: ['./exercicio10.component.css']
})
export class Exercicio10Component {
  operacao: string = "soma";
  valor1: number = 0;
  valor2: number = 0;

  trocarOperacao(event: Event): void {
    const elemento = event.target as HTMLSelectElement;
    this.operacao = elemento.value;
  }

  calcular(): void {
  }
}
