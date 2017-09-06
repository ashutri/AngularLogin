import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbLoginComponent } from './login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: NbLoginComponent }
    ])
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
