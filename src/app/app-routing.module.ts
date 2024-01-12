import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { PostnewsletterComponent } from './pages/postnewsletter/postnewsletter.component';
import { SphereComponent } from './pages/sphere/sphere.component';
import { SubscribeSphereComponent } from './pages/subscribe-sphere/subscribe-sphere.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"feeds",component:FeedsComponent},
  {path:"spheres",component:SphereComponent},
  { path: 'subscribeSphere/:title', component:SubscribeSphereComponent },
  {path:"contact",component:ContactComponent},
  {path:"postnewslettervivek",component:PostnewsletterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
