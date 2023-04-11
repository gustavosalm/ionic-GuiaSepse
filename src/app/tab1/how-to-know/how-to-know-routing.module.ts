import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowToKnowPage } from './how-to-know.page';

const routes: Routes = [
  {
    path: '',
    component: HowToKnowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowToKnowPageRoutingModule {}
