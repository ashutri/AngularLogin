import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import {  Routes} from '@angular/router';

import {NbAuthBlockComponent} from './auth/components/auth-block/auth-block.component';
import{NbLoginComponent} from './auth/components/login/login.component';
import{NbRegisterComponent} from './auth/components/register/register.component';
import{NbLogoutComponent} from './auth/components/logout/logout.component';
import{NbRequestPasswordComponent} from './auth/components/request-password/request-password.component';

import{NbResetPasswordComponent} from './auth/components/reset-password/reset-password.component';




 const routes: Routes = [
  {
    path: 'login', component: NbLoginComponent, pathMatch: 'full'},
{
    path: 'register', component: NbRegisterComponent, pathMatch: 'full'},
  {

  path: 'auth',
  component: NbAuthBlockComponent,
  children: [
    {
      path: '',
      component: NbLoginComponent,
    },
   ,
    {
      path: 'register',
      component: NbRegisterComponent,
    },
    {
      path: 'logout',
      component: NbLogoutComponent,
    },
    {
      path: 'request-password',
      component: NbRequestPasswordComponent,
    },
    {
      path: 'reset-password',
      component: NbResetPasswordComponent,
    },
  ],
}];
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'login', component: NbLoginComponent, pathMatch: 'full'},
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
    ])
    
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }

export const routingComponents = [NbAuthBlockComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent];
  
  export const module: ModuleWithProviders=RouterModule.forRoot(routes);