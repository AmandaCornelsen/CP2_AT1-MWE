import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercicio1Component } from './components/exercicio1/exercicio1.component';
import { Exercicio2Component } from './components/exercicio2/exercicio2.component';
import { Exercicio3Component } from './components/exercicio3/exercicio3.component';
import { Exercicio4Component } from './components/exercicio4/exercicio4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercicio1Component, Exercicio2Component, Exercicio3Component, Exercicio4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CP2_AT1_MWE';
}
