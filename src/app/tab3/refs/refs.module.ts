import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefsPageRoutingModule } from './refs-routing.module';

import { RefsPage } from './refs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefsPageRoutingModule
  ],
  declarations: [RefsPage]
})
export class RefsPageModule {}
