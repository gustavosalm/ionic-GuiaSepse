import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactorsPageRoutingModule } from './factors-routing.module';

import { FactorsPage } from './factors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactorsPageRoutingModule
  ],
  declarations: [FactorsPage]
})
export class FactorsPageModule {}
