import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio9.component.html',
  styleUrl: './exercicio9.component.css'
})
export class Exercicio9Component {
  produtos = [
    {nome:"Notebook", preco:3000, promocao:true},
    {nome:"Mouse", preco:50, promocao:false}];

    color:string = "red" 
}
