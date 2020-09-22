
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { RouterModule } from '@angular/router'
//import { AppRoutingModule } from './../app-routing.module';

import {PagesComponent} from './pages.component';
import {Grafica1Component} from './grafica1/grafica1.component';
import {ProgressComponent} from './progress/progress.component';
import {DashboardComponent} from './dashboard/dashboard.component';



//aqui manejaremos las rutas autenticadas

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],

  imports: [ 
    CommonModule,
    SharedModule,
    //AppRoutingModule,   //otra forma
    RouterModule,
  
  ] // este es el q incluye las direrctivas del ngfor, ngif
  
})
export class PagesModule { }
