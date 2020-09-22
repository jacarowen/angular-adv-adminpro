import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Modulos   agrupadores de otros componentes
import { PagesRoutingModule } from './pages/pages.routing'
import { AuthRoutingModule } from './auth/auth.routing'


import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes= [
  //path : '/dashboard PagesRouting'
  //path : '/auth AuthRouting'

  { path: '', redirectTo: '/dashboard',pathMatch: 'full' }, 

{ path: '**', component: NopagefoundComponent}, 

];


@NgModule({
declarations: [],
imports: [ 
  RouterModule.forRoot( routes), //declaracion rutas principales
  PagesRoutingModule,
  AuthRoutingModule
],
exports: [ RouterModule]
})
export class AppRoutingModule { }
