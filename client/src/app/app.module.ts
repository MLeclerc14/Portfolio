import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AboutModule,
    HomeModule,
    ContactModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
