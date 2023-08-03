import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactorsPage } from './factors.page';

const routes: Routes = [
  {
    path: '',
    component: FactorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactorsPageRoutingModule {}
