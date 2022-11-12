import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskControllerComponent } from './ask-controller/ask-controller.component';
import { AskComponent } from './ask/ask.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewestControllerComponent } from './newest-controller/newest-controller.component';
import { NewestViewComponent } from './newest-view/newest-view.component';
import { ShowControllerComponent } from './show-controller/show-controller.component';
import { ShowComponent } from './show/show.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewestViewComponent,
    NewestControllerComponent,
    AskComponent,
    AskControllerComponent,
    ShowComponent,
    ShowControllerComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewestControllerComponent, AskControllerComponent, ShowControllerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
