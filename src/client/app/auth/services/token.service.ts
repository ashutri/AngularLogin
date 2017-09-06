import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/do';

import { nbAuthOptionsToken } from '../auth.options';
import { deepExtend, getDeepFromObject } from '../helpers';

@Injectable()
export class NbTokenService {

  protected defaultConfig: any = {
    token: {
      key: 'auth_app_token',
      getter: () => Observable.of(localStorage.getItem(this.getConfigValue('token.key'))),
      setter: (token: any) => Observable.of(token)
        .do(t => localStorage.setItem(this.getConfigValue('token.key'), t)),
      deleter: (token: any) => Observable.of(token)
        .do(t => localStorage.removeItem(this.getConfigValue('token.key'))),
    },
  };
  protected config: any = {};

  protected token$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor( @Inject(nbAuthOptionsToken) protected options: any) {
    this.setConfig(options);

    this.get().subscribe(token => this.publishToken(token));
  }

  setConfig(config: any): void {
    this.config = deepExtend({}, this.defaultConfig, config);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }

  set(token: any): Observable<any> {
    this.publishToken(token);

    return this.getConfigValue('token.setter')(token);
  }

  get(): Observable<any> {
    return this.getConfigValue('token.getter')();
  }

  tokenChange(): Observable<any> {
    return this.token$.publish().refCount();
  }

  clear(): Observable<any> {
    this.publishToken(null);

    return this.getConfigValue('token.deleter')();
  }

  protected publishToken(token: any): void {
    this.token$.next(token);
  }
}
