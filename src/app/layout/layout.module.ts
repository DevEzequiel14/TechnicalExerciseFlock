import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../core/authentication/guard/authentication.guard';

const routes: Routes = [{

  path: '',
  component: MainComponent,
  children:[{
    path:'',
    loadChildren: () => import('../module/login/login.module').then(m => m.LoginModule)
  },{
    path:'home',
    canActivate:[AuthenticationGuard],
    loadChildren: () => import('../module/home/home.module').then(m => m.HomeModule)

  }]
}]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
