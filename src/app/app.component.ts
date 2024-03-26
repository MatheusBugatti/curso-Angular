import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

//componentes
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponentComponent } from './components/signals-component/signals.component.component';
import { PaiOuMaeComponent } from "./components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component";
import { AngularPipesComponent } from "./components/pipes/angular-pipes/angular-pipes.component";
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `

  <h1>Curso de Angular</h1>

  
  

  `,
    imports: [
        TemplateDeferrableViewsComponent,
        TemplateVariablesComponent,
        RouterOutlet,
        CommonModule,
        NewComponent,
        TemplateBindingComponent,
        TemplateControlFlowComponent,
        SignalsComponentComponent,
        PaiOuMaeComponent,
        AngularPipesComponent,
        ReactiveFormsComponent,
        TemplateDrivenFormsComponent
      ]
})
export class AppComponent {}

//<app-pai-ou-mae></app-pai-ou-mae
//<app-signals-component></app-signals-component>
//<app-new-component></app-new-component>
//<app-template-deferrable-views></app-template-deferrable-views>
//<app-template-control-flow></app-template-control-flow>
//<router-outlet></router-outlet>
//<app-angular-pipes/>
//<app-template-driven-forms></app-template-driven-forms>
//<app-reactive-forms></app-reactive-forms>