import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AwesomePipe } from './awesome.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AwesomePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
  AppComponent,
  HighlightDirective,
  TitleComponent,

  AwesomePipe,
  ContactComponent,
  ContactHighlightDirective
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
