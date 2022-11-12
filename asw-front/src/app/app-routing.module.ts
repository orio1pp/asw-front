import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewestViewComponent } from './newest-view/newest-view.component';

const routes: Routes = [
  {path: 'view-newest', component: NewestViewComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
