import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio4.component.html',
  styleUrl: './exercicio4.component.css'
})
export class Exercicio4Component {
  tarefas : string[] = ["Estudar Angular", "Fazer exercícios", "Revisar código"]

  removerItem(index: number): void {
    if (index >= 0 && index < this.tarefas.length) {
      this.tarefas.splice(index, 1);
    }
  }
}
