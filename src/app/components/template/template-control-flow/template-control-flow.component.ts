import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
public switchCondition = 'B';

public isTrue = true;

public itens = [{ name: "Matheus Bugatti", idade: 25}, 
  {name: "Renaoooo", idade:49}];
  
public loadingData$: Observable<string[]> = of([
  'item1',
  'item2',
  'item3',
]).pipe(delay(3000));

  data: string[] = ["Renan", "Matheus", "Angualar"]; 
  
  public AddNewValue(value:string , idade?: number){
    if(!idade){
      idade = 400;
    }
    this.itens.push({ name: value , idade: idade});
    return console.log('Meus Itens',this.itens);
    
  }
  
}