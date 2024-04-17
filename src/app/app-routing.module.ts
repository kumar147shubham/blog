import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { RichedithomeComponent } from './richedithome/richedithome.component';
import { TestngxextendedpdfviewerComponent } from './testngxextendedpdfviewer/testngxextendedpdfviewer.component';
import { FormlyvalidationComponent } from './formlyvalidation/formlyvalidation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'richedit', component: RichedithomeComponent },
  { path: 'pdfviewer', component: PdfviewerComponent },
  { path: 'ngxextpdfviewer', component: TestngxextendedpdfviewerComponent },
  { path:'admin', loadChildren:()=> import('./admin/admin.module').then(mod=>mod.AdminModule) },
  { path: 'users', loadChildren:()=> import('./users/users.module').then(users=>users.UsersModule) },
  { path: 'formly', component: FormlyvalidationComponent},
  { path: 'lazyloadingcomponent', loadChildren:()=> import('./lazyloadingcomponent/lazyloadingcomponent.module').then(l=>l.LazyloadingcomponentModule)},
  { path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
