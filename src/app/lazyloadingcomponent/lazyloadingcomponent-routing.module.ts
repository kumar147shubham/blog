import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadingcomponentComponent } from './lazyloadingcomponent.component';

const routes: Routes = [
  { path: 'lazyloadingcomponent', component: LazyloadingcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingcomponentRoutingModule { }
