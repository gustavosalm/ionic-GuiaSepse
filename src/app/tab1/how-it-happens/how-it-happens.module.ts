import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowItHappensPageRoutingModule } from './how-it-happens-routing.module';

import { HowItHappensPage } from './how-it-happens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowItHappensPageRoutingModule
  ],
  declarations: [HowItHappensPage]
})
export class HowItHappensPageModule {}
