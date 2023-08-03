import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreventPageRoutingModule } from './prevent-routing.module';

import { PreventPage } from './prevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreventPageRoutingModule
  ],
  declarations: [PreventPage]
})
export class PreventPageModule {}
