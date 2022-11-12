import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskControllerComponent } from './ask-controller/ask-controller.component';
import { AskComponent } from './ask/ask.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewestControllerComponent } from './newest-controller/newest-controller.component';
import { NewestViewComponent } from './newest-view/newest-view.component';
import { ShowControllerComponent } from './show-controller/show-controller.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewestViewComponent,
    NewestControllerComponent,
    AskComponent,
    AskControllerComponent,
    ShowComponent,
    ShowControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewestControllerComponent, AskControllerComponent, ShowControllerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
