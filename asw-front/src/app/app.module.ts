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
import { SubmitViewComponent } from './submit-view/submit-view.component';
import { SubmitControllerComponent } from './submit-controller/submit-controller.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileControllerComponent } from './profile-controller/profile-controller.component';
import { SubmissionsViewComponent } from './submissions-view/submissions-view.component';
import { CommentsViewComponent } from './comments-view/comments-view.component';
import { VotedSubmissionsViewComponent } from './voted-submissions-view/voted-submissions-view.component';
import { VotedCommentsViewComponent } from './voted-comments-view/voted-comments-view.component';
import { ShowControllerComponent } from './show-controller/show-controller.component';
import { ShowComponent } from './show/show.component';
import { SubmissionControllerComponent } from './submission-controller/submission-controller.component';
import { SubmissionComponent } from './submission/submission.component';
import { ThreadsControllerComponent } from './threads-controller/threads-controller.component';
import { ThreadsComponent } from './threads/threads.component';

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
    AskComponent,
    AskControllerComponent,
    ShowComponent,
    ShowControllerComponent,
    SubmissionComponent,
    SubmissionControllerComponent,
    ThreadsComponent,
    ThreadsControllerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    NewestControllerComponent,
    AskControllerComponent,
    SubmitControllerComponent,
    ShowControllerComponent,
    SubmissionControllerComponent,
    ThreadsControllerComponent,
    ProfileControllerComponent
  ],
  providers: [NewestControllerComponent,
    SubmitControllerComponent,
    ProfileControllerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
