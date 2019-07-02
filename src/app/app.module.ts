import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Route } from '@angular/router'

//Animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Service
import { UsuariosService } from './services/usuarios.service';


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
import { EventsComponent } from './class_3/events/events.component'
import { HttpClientModule } from '@angular/common/http';
import { PipesComponent } from './pipes/pipes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeComponent } from './components/home/home.component';

const routes: Route[] = [
  {path: "", component: HomeComponent },
  {path: "users", component: UsuariosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MaterialDsgnComponent,
    EventsComponent,
    UsuariosComponent,
    PipesComponent,
    HomeComponent
  ],
  imports: [
    //importar para los services
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    //components
    MatInputModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatGridListModule, MatCardModule,MatButtonModule,
    //routes
    RouterModule.forRoot(routes) ,

    FormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
