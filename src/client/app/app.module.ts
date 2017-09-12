import { NgModule, InjectionToken, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NbLayoutModule } from './theme/components/layouts/layout.module';

import { List } from 'immutable';

import { NbThemeModule } from './theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {  NbDummyAuthProvider } from './auth/providers/dummy-auth.provider';
import {  NbAbstractAuthProvider } from './auth/providers/abstract-auth.provider';
import {   NbEmailPassAuthProvider } from './auth/providers/email-pass-auth.provider';
import {   NgEmailPassAuthProviderConfig, NbEmailPassResetModuleConfig, NbEmailPassModuleConfig } from './auth/providers/email-pass-auth.options';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { NbSharedModule } from './theme/components/shared/shared.module';
import { NbCheckboxModule } from './theme/components/checkbox/checkbox.module';
import { NbAuthModule } from './auth/auth.module';
import{NbLoginComponent} from './auth/components/login/login.component';
import{NbRegisterComponent} from './auth/components/register/register.component';
import{NbLogoutComponent} from './auth/components/logout/logout.component';
import{NbRequestPasswordComponent} from './auth/components/request-password/request-password.component';
import{routing, appRoutingProviders}from'./app.routing'
import{NbResetPasswordComponent} from './auth/components/reset-password/reset-password.component';
import { NbAuthService, NbAuthResult  } from './auth/services/auth.service';
import { NbTokenService  } from './auth/services/token.service';
import {nbAuthOptionsToken  } from './auth/auth.options';
import {nbAuthProvidersToken  } from './auth/auth.options';
import {NbThemeOptions  } from './theme/theme.options';
export interface AppConfig {
  BASE_URL:string,
  APP_ID:string,
  APP_SECRET:string
}

export const APPCONFIG:AppConfig = {
    BASE_URL: 'your app subdomain',
    APP_ID: 'your app id',
    APP_SECRET: 'your app secret',
};
interface AuthOptions {
  name: string;
}

let NB_AUTH_OPTIONS = new InjectionToken<AuthOptions>('auth.options');
let authOptionsToken: AuthOptions = {name: 'NB_AUTH_OPTIONS'};
@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, NbLayoutModule, NbSharedModule,NbCheckboxModule, routing, AppRoutingModule, AboutModule, HomeModule, SharedModule.forRoot(),
    NbAuthModule.forRoot({
      providers: {
        
        // email: {
        //   service: NbDummyAuthProvider,
        //   config: {
        //     alwaysFail: true,
        //     delay: 1000,
        //   },
        // },
        
      },
    }),
    NbAuthModule,
  ],
  
  
  declarations: [AppComponent, ],
  providers: [

    
    {
      
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
