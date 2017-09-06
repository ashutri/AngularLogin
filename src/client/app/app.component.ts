import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import {ViewEncapsulation} from '@angular/core';


/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
 
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
