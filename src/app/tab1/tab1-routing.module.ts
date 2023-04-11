import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'habit',
    loadChildren: () => import('./habits/habits.module').then( m => m.HabitsPageModule)
  },
  {
    path: 'how-to-know',
    loadChildren: () => import('./how-to-know/how-to-know.module').then( m => m.HowToKnowPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
