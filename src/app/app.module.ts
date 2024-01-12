import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PostnewsletterComponent } from './pages/postnewsletter/postnewsletter.component';

import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './appservice/service.service';
import { SphereComponent } from './pages/sphere/sphere.component';

import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SubscribeSphereComponent } from './pages/subscribe-sphere/subscribe-sphere.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedsComponent,
    NavbarComponent,
    PostnewsletterComponent,
    SphereComponent,
    
    SubscribeSphereComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule, 

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
