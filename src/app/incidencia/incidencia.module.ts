import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddIncidenciaComponent } from './components/add-incidencia/add-incidencia.component';
import { ListIncidenciaComponent } from './components/list-incidencia/list-incidencia.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AddIncidenciaComponent,
    ListIncidenciaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class IncidenciaModule { }
