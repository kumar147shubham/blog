import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { LoginReactiveComponent } from './login/login-reactive/login-reactive.component';

console.warn('user module');

@NgModule({
  declarations: [
    ListComponent,
    LoginComponent,
    LoginReactiveComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
