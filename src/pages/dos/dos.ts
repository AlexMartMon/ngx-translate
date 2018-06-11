import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the DosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dos',
  templateUrl: 'dos.html',
})
export class DosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private translateService: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DosPage');
  }

}
