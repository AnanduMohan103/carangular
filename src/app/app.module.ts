import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcarComponent } from './addcar/addcar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewcarComponent } from './viewcar/viewcar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:NavbarComponent
  },
  {
    path:"add",component:AddcarComponent
  },
  {
    path:"view",component:ViewcarComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddcarComponent,
    NavbarComponent,
    ViewcarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
