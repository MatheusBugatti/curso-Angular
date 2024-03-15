import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';

import { routes } from './app.routes';

//LOCALE PT-BR
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


export const appConfig: ApplicationConfig = {
  providers:[
    provideRouter(routes),
  { provide: LOCALE_ID, useValue: 'pt-BR' }
],
};
