import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { PostnewsletterComponent } from './pages/postnewsletter/postnewsletter.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"feeds",component:FeedsComponent},
  {path:"postnewsletter",component:PostnewsletterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
