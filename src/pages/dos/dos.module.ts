import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DosPage } from './dos';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    DosPage,
  ],
  imports: [
    IonicPageModule.forChild(DosPage),
    TranslateModule
  ],
})
export class DosPageModule {}
