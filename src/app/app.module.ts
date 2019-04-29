import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//directives
import { HighlightDirective } from './highlight.directive';
import { ShowMessageComponent } from './class2/show-message/show-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ShowMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
