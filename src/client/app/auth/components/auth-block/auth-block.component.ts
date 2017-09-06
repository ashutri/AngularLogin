
import { Component } from '@angular/core';

@Component({
  moduleId: module.id, // this is the key
  selector: 'nb-auth-block',
  styles:['auth-block.component.scss'],
  template: `
    <div class="auth-block">
        <nb-layout></nb-layout>
    </div>
  `,
})
export class NbAuthBlockComponent {
}
