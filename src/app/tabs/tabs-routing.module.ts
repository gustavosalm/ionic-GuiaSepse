import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab1/habits',
        loadChildren: () => import('../tab1/habits/habits.module').then( m => m.HabitsPageModule)
      },
      {
        path: 'tab1/howtoknow',
        loadChildren: () => import('../tab1/how-to-know/how-to-know.module').then( m => m.HowToKnowPageModule)
      },
      {
        path: 'tab3/team',
        loadChildren: () => import('../tab3/team/team.module').then( m => m.TeamPageModule)
      },
      {
        path: 'tab3/refs',
        loadChildren: () => import('../tab3/refs/refs.module').then( m => m.RefsPageModule)
      },
      {
        path: 'tab3/terms',
        loadChildren: () => import('../tab3/terms/terms.module').then( m => m.TermsPageModule)
      },
      {
        path: 'tab3/politics',
        loadChildren: () => import('../tab3/politics/politics.module').then( m => m.PoliticsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
