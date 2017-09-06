import{ModuleWithProviders}from'@angular/core';
import{Routes, RouterModule}from'@angular/router';
import{NbLoginComponent} from './auth/components/login/login.component';
import{NbRegisterComponent} from './auth/components/register/register.component';
const appRoutes: Routes= [{
    path:'login',
    component:NbLoginComponent

},
{
    path:'register',
    component:NbRegisterComponent

}

];

export const appRoutingProviders: any[] =[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);