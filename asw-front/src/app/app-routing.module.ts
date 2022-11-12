import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskComponent } from './ask/ask.component';
import { NewestViewComponent } from './newest-view/newest-view.component';
import { ReplyComponent } from './reply/reply.component';
import { ShowComponent } from './show/show.component';
import { SubmissionComponent } from './submission/submission.component';
import { ThreadsComponent } from './threads/threads.component';

const routes: Routes = [
  { path: 'view-newest', component: NewestViewComponent },
  { path: 'ask', component: AskComponent },
  { path: 'show', component: ShowComponent },
  { path: 'submission', component: SubmissionComponent },
  { path: 'threads', component: ThreadsComponent },
  { path: 'reply', component: ReplyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
