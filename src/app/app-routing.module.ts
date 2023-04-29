import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'admin', loadChildren:()=> import('./admin/admin.module').then(mod=>mod.AdminModule) },
  { path: 'users', loadChildren:()=> import('./users/users.module').then(users=>users.UsersModule) },
  { path: 'lazyloadingcomponent', loadChildren:()=> import('./lazyloadingcomponent/lazyloadingcomponent.module').then(l=>l.LazyloadingcomponentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
