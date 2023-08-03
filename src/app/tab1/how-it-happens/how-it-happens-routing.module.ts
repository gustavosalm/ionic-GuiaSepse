import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowItHappensPage } from './how-it-happens.page';

const routes: Routes = [
  {
    path: '',
    component: HowItHappensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowItHappensPageRoutingModule {}
