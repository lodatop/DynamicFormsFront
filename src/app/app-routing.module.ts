import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule) },
  { path: 'views', loadChildren:() => import('./tabs/tabs.module').then( m => m.TabsPageModule) },
  { path: 'views/submenu/:menuId', loadChildren: () => import('./pages/submenu/submenu.module').then( m => m.SubmenuPageModule) },
  { path: 'views/form/:formId', loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule) },
  { path: 'views/add', loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule) },
  { path: 'views/add/:menuId', loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule) },
  { path: 'register/admin', loadChildren: () => import('./pages/register-admin/register-admin.module').then( m => m.RegisterAdminPageModule) }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
