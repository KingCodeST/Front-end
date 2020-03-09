import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShuttleComponent } from './shuttle/shuttle.component';
import {UserService} from './shuttle/user.service';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    ShuttleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
