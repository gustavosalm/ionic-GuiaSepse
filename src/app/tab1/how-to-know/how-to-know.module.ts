import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowToKnowPageRoutingModule } from './how-to-know-routing.module';

import { HowToKnowPage } from './how-to-know.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowToKnowPageRoutingModule
  ],
  declarations: [HowToKnowPage]
})
export class HowToKnowPageModule {}
