import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private translateService: TranslateService,
    storage: Storage) {
      platform.ready().then(() => {
        
      
      //Language
      storage.get('idioma').then((data) =>{
        if (data != null && data != undefined){
          console.log(data);
          this.translateService.setDefaultLang(data);
          this.translateService.use(data);
        }else{
          console.log('vacio');
          this.translateService.setDefaultLang('es');
          this.translateService.use('es');
        }
      });
      
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

