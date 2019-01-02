import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadetePage } from './cadete';

@NgModule({
  declarations: [
    CadetePage,
  ],
  imports: [
    IonicPageModule.forChild(CadetePage),
  ],
})
export class CadetePageModule {}
