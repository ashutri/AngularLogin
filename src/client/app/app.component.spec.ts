import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import {
  async
} from '@angular/core/testing';
import {
  Route
} from '@angular/router';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {NbAuthBlockComponent} from './auth/components/auth-block/auth-block.component';
import{NbLoginComponent} from './auth/components/login/login.component';
import{NbRegisterComponent} from './auth/components/register/register.component';
import{NbLogoutComponent} from './auth/components/logout/logout.component';
import{NbRequestPasswordComponent} from './auth/components/request-password/request-password.component';

import{NbResetPasswordComponent} from './auth/components/reset-password/reset-password.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export function main() {

  describe('App component', () => {

    let config: Route[] = [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: NbLoginComponent },
      { path: 'logout', component: NbLogoutComponent },
      { path: 'register', component: NbRegisterComponent },
      { path: 'request-password', component: NbRequestPasswordComponent },
      { path: 'reset-password', component: NbResetPasswordComponent }
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterTestingModule.withRoutes(config)],
        declarations: [TestComponent, ToolbarComponent,
          NavbarComponent, AppComponent,
          HomeComponent, AboutComponent, NbLoginComponent, NbLogoutComponent, NbRegisterComponent,
          NbRequestPasswordComponent, NbResetPasswordComponent ],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      });
    });

    it('should build without a problem',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let compiled = fixture.nativeElement;

            expect(compiled).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>'
})

class TestComponent {
}



