import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsViewComponent } from './comments-view/comments-view.component';
import { NewestViewComponent } from './newest-view/newest-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { SubmissionsViewComponent } from './submissions-view/submissions-view.component';
import { SubmitViewComponent } from './submit-view/submit-view.component';
import { VotedCommentsViewComponent } from './voted-comments-view/voted-comments-view.component';
import { VotedSubmissionsViewComponent } from './voted-submissions-view/voted-submissions-view.component';

const routes: Routes = [
  {path: 'view-newest', component: NewestViewComponent},
  {path: 'submit-view', component: SubmitViewComponent},
  {path: 'profile-view', component: ProfileViewComponent},
  {path: 'submissions', component: SubmissionsViewComponent},
  {path: 'comments', component: CommentsViewComponent},
  {path: 'votedSubmissions', component: VotedSubmissionsViewComponent},
  {path: 'votedComments', component: VotedCommentsViewComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
