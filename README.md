# ngx-translate 
 
 Aplicación simple de prueba para conocer el funcionamiento básico de ngx-translate en ionic 3, como aprendi a usar dicho componente fue en <a href="https://blog.ng-classroom.com/blog/ionic2/ngx-translate/"> este blog </a>
 
<hr>

Primero instalar el componente
Este es para la version 6 de angular

npm install @ngx-translate/core --save
npm install @ngx-translate/http-loader --save

<strong> Si tu version de angular es la 5 entonces debes instalar con el siguiente comando </strong><br/>
npm i @ngx-translate/core@9.1.1

<hr>

En ../assets creamos un directorio llamado i18n que es donde guardamos los json de cada idioma.

y creamos los json de cada idioma que desees tener, es.json y en.json en mi caso, para hacer una app en ingles y español.

<hr>

En app.module.ts añadimos lo siguiente:

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


<strong> Esta función se encarga de obtener los datos de la traducción.</strong><br/>
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
    
<hr>

En home.module.ts importamos 

imports: [
    IonicPageModule.forChild(HomePage),
    TranslateModule
  ],

Si vas a usar ngx-translate en esa page debes de importar esto,

para usarlo en el html se hace con {{ 'key' | translate }} 

<hr>

En app.components.ts añadimos: 
  this.translateService.setDefaultLang('en');
  this.translateService.use('en');

constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private translateService: TranslateService
  ) {
    this.platform.ready().then(() => {
      //Language
      this.translateService.setDefaultLang('en');
      this.translateService.use('en');

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 
 
