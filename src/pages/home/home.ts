import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { DosPage } from '../dos/dos';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  idioms: any[] = [];
  constructor(public navCtrl: NavController,
    private translateService: TranslateService,
    public storage: Storage) {
      this.idioms = [
        {
          value: 'es',
          label: 'Español'
        },
        {
          value: 'en',
          label: 'Ingles'
        },
        {
          value: 'pt',
          label: '日本語'
        }
      ];
  }
  choose(lang) {
    this.storage.set('idioma',lang);
    this.translateService.use(lang);
  }

  dos(){
    this.navCtrl.push(DosPage);
  }
  
}
