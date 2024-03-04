import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

//componentes
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewComponent, TemplateBindingComponent],
  template: `
  
  <h1>Curso de Angular</h1>
  <app-template-binding></app-template-binding>

  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
//  <app-new-component></app-new-component>
/* <router-outlet></router-outlet> */