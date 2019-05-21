import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Material Comps
import { 
  MatOptionModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { MaterialDsgnComponent } from './class_3/material-dsgn/material-dsgn.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDsgnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //components
    MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatGridListModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
