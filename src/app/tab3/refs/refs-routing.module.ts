import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefsPage } from './refs.page';

const routes: Routes = [
  {
    path: '',
    component: RefsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefsPageRoutingModule {}
