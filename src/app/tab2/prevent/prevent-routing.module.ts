import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreventPage } from './prevent.page';

const routes: Routes = [
  {
    path: '',
    component: PreventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreventPageRoutingModule {}
