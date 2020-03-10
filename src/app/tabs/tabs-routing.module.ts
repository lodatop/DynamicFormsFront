import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/menu/menu.module').then(m => m.MenuPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'stats',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/stats/stats.module').then( m => m.StatsPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'views/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
