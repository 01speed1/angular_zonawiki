import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//directives
import { HighlightDirective } from './highlight.directive';
import { ShowMessageComponent } from './class2/show-message/show-message.component';
import { ListOfElementsComponent } from './class2/list-of-elements/list-of-elements.component';
import { StylingComponent } from './class2/styling/styling.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ShowMessageComponent,
    ListOfElementsComponent,
    StylingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
