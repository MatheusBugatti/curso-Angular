import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signals-component',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.component.html',
  styleUrl: './signals.component.component.scss'
})
export class SignalsComponentComponent {

  public firstName = signal ("Matheus");
  public lastName = signal ("Bugatti");

    public fullName = computed( () =>{
      return this.firstName() + this.lastName();
    })

    public array = signal ([1]);

    /*
    effect -  raramente são necessarios na maioria dos cogigos.
    podem ser uteis em:
    - Registro de dados sendo exibisdos e quando eles ]
    mudam seja pra analise ou como ferramenta de depuração
    
    - Manter os dados sincronizados com o window.localStorage.

    - Adicioanndo comportamento DOM personalizado que 
    não pode ser expresso com sintaxe de modelo
    */

    constructor(){
    effect(() =>{
      console.log(this.firstName());
      console.log(this.array());
    })
    }

    public updateName(){
      return this.firstName.set("Joao ");
    }
    public updateArray(){
      // this.firstName.update(() => {
      //   return "Joao "
      // });

      this.array.update((oudValue) =>{
        return [...oudValue, oudValue.length+1]
      })

    }
}
