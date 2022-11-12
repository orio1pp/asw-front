import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewestControllerComponent } from './newest-controller/newest-controller.component';
import { NewestViewComponent } from './newest-view/newest-view.component';
import { SubmitViewComponent } from './submit-view/submit-view.component';
import { SubmitControllerComponent } from './submit-controller/submit-controller.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileControllerComponent } from './profile-controller/profile-controller.component';
import { SubmissionsViewComponent } from './submissions-view/submissions-view.component';
import { CommentsViewComponent } from './comments-view/comments-view.component';
import { VotedSubmissionsViewComponent } from './voted-submissions-view/voted-submissions-view.component';
import { VotedCommentsViewComponent } from './voted-comments-view/voted-comments-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewestViewComponent,
    NewestControllerComponent,
    SubmitViewComponent,
    SubmitControllerComponent,
    ProfileViewComponent,
    ProfileControllerComponent,
    SubmissionsViewComponent,
    CommentsViewComponent,
    VotedSubmissionsViewComponent,
    VotedCommentsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewestControllerComponent,
    SubmitControllerComponent,
    ProfileControllerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
