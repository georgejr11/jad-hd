import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIncidenciaComponent } from './incidencia/components/add-incidencia/add-incidencia.component';
import { ListIncidenciaComponent } from './incidencia/components/list-incidencia/list-incidencia.component';
import { AddUserComponent } from './user/components/add-user/add-user.component';
import { ListUserComponent } from './user/components/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUserComponent, 
    AddIncidenciaComponent,
    ListIncidenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
