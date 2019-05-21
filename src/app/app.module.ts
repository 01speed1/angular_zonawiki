import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Material Comps


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
