import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskComponent } from './ask/ask.component';
import { NewestViewComponent } from './newest-view/newest-view.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path: 'view-newest', component: NewestViewComponent},
  {path: 'ask', component: AskComponent},
  {path: 'show', component: ShowComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
