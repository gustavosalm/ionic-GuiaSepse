import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'how-to-know',
    loadChildren: () => import('./how-to-know/how-to-know.module').then( m => m.HowToKnowPageModule)
  },
  {
    path: 'recommendation',
    loadChildren: () => import('./recommendation/recommendation.module').then( m => m.RecommendationPageModule)
  },
  {
    path: 'how-it-happens',
    loadChildren: () => import('./how-it-happens/how-it-happens.module').then( m => m.HowItHappensPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
