/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  HostBinding,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { convertToBoolProperty } from '../helpers';

@Component({
  selector: 'nb-tab',
  template: `
    <ng-container *ngIf="init">
      <ng-content></ng-content>
    </ng-container>
  `,
})
export class NbTabComponent {

  @Input() tabTitle: string;

  @Input() route: string;

  @HostBinding('class.content-active')
  activeValue: boolean = false;

  @Input()
  get active() {
    return this.activeValue;
  }
  set active(val: boolean) {
    this.activeValue = convertToBoolProperty(val);
    if (this.activeValue) {
      this.init = true;
    }
  }

  // TODO: it makes sense to add 'lazyLoad' input to 'nb-tabset' component and make this functionality configurable
  init: boolean = false;
}

@Component({
  selector: 'nb-tabset',
  styleUrls: ['./tabset.component.scss'],
  template: `
    <ul>
      <li *ngFor="let tab of tabs"
          (click)="selectTab(tab)"
          [class.active]="tab.active">
        <a href (click)="$event.preventDefault()">{{ tab.tabTitle }}</a>
      </li>
    </ul>
    <ng-content select="nb-tab"></ng-content>
  `,
})
export class NbTabsetComponent implements AfterContentInit {

  @ContentChildren(NbTabComponent) tabs: QueryList<NbTabComponent>;

  @HostBinding('class.full-width')
  private fullWidthValue: boolean = false;

  @Input()
  set fullWidth(val: boolean) {
    this.fullWidthValue = convertToBoolProperty(val);
  }

  @Input() routes: boolean = false;

  @Output() changeTab = new EventEmitter<any>();

  constructor(private route: ActivatedRoute) {
  }

  ngAfterContentInit() {
    this.route.params
      .subscribe((params: any) => {
        const activeTab = this.tabs.find(tab => this.routes ? tab.route === params.tab : tab.active);
        this.selectTab(activeTab || this.tabs.first);
      });
  }

  selectTab(selectedTab: NbTabComponent) {
    this.tabs.forEach(tab => tab.active = tab === selectedTab);
    this.changeTab.emit(selectedTab);
  }
}
