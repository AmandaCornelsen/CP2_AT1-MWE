import { CommonEngine } from '@angular/ssr';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercicio7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio7.component.html',
  styleUrl: './exercicio7.component.css'
})
export class Exercicio7Component {
  valor:number = 1;
  valor2:string = "dois";
  valor3:string = "tres"
}
