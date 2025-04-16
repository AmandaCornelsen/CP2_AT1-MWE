import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio6.component.html',
  styleUrl: './exercicio6.component.css'
})
export class Exercicio6Component {
  usuarios = [{nome: "Ana", idade: 25 }, {nome: "Carlos", idade: 30}];
}
