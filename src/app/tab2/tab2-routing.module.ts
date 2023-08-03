import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'prevent',
    loadChildren: () => import('./prevent/prevent.module').then( m => m.PreventPageModule)
  },
  {
    path: 'factors',
    loadChildren: () => import('./factors/factors.module').then( m => m.FactorsPageModule)
  },
  {
    path: 'positions',
    loadChildren: () => import('./positions/positions.module').then( m => m.PositionsPageModule)
  },
  {
    path: 'instructions',
    loadChildren: () => import('./instructions/instructions.module').then( m => m.InstructionsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
