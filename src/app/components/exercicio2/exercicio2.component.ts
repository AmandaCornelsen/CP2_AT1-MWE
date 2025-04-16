import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio2.component.html',
  styleUrl: './exercicio2.component.css'
})
export class Exercicio2Component {
  listaCompra = ["Maça", "Banana", "Leite"]
}
