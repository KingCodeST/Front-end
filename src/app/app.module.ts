import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShuttleComponent } from './shuttle/shuttle.component';
import { HomeComponent } from './home/home.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { ProfileComponent } from './profile/profile.component';
import { TripsComponent } from './trips/trips.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutusComponent } from './aboutus/aboutus.component'


@NgModule({
  declarations: [
    AppComponent,
    ShuttleComponent,
    HomeComponent,
    IndexpageComponent,
    ProfileComponent,
    TripsComponent,
    LoginComponent,
    LogoutComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 
   bootstrap: [AppComponent]
})
export class AppModule { }
