import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio5.component.html',
  styleUrl: './exercicio5.component.css'
})
export class Exercicio5Component {
  status: string = "pendente";

  trocarValor(event: Event): void {
    const elemento = event.target as HTMLInputElement;
    this.status = elemento.value;
}
}
