import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundDirective } from './background.directive';
import { AuthorComponent } from './author/author.component';
import { DisplayDirective } from './display.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective,
    AuthorComponent,
    DisplayDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
