import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubscriberformComponent } from './components/subscriberform/subscriberform.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PostnewsletterComponent } from './pages/postnewsletter/postnewsletter.component';

import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './appservice/service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedsComponent,
    NavbarComponent,
    SubscriberformComponent,
    PostnewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
