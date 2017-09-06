
import { Component, InjectionToken, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NbUser } from '../../models/user';
import { NbAuthService, NbAuthResult } from '../../services/auth.service';
import { NbTokenService } from '../../services/token.service';
import {nbAuthOptionsToken  } from '../../../auth/auth.options';




@Component({
  moduleId: module.id,
  selector: 'nb-login',
  styles:['login.component.scss'],
  styleUrls: ['login.component.css'],
  templateUrl: 'login.component.html',
 
    
})
export class NbLoginComponent implements OnInit {
  redirectDelay: number = 1500;
  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: NbUser = new NbUser();
  

 constructor(protected service: NbAuthService,
              protected router: Router, injector: Injector) {
                
          
  }
  ngOnInit(){}
  login(provider: string): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service.authenticate(provider, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });
  }

  getConfigValue(provider: string, key: string): any {
    return this.service.getProvider(provider).getConfigValue(key);
  }
 
  
}