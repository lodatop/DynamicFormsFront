import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmenuPage } from './submenu.page';

const routes: Routes = [
  {
    path: '',
    component: SubmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmenuPageRoutingModule {}
