import { JsonPipe, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {
  public listaComidas = signal<Array<{comida: string, preco: string}>>([
      {
        comida: "x-salada", 
        preco: "R$10",
      },
      {
        comida: "coxinha",
        preco: "R$5",
      },
      { 
        comida: "x-TUDO", 
        preco: "R$20",
      }
      
  ])

  public submitForm(form:NgForm){
    console.log(form.valid);

    if(form.valid){
      console.log(form.valid);
      console.log(form.value);
      
    }
    
  }
}
