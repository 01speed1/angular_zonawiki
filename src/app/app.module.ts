import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
//Animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



//Material Comps
import { 
  MatOptionModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { MaterialDsgnComponent } from './class_3/material-dsgn/material-dsgn.component';
import { EventsComponent } from './class_3/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDsgnComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //components
    MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatGridListModule, MatCardModule,MatButtonModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
