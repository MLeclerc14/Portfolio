import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './components/shared/material.module';
import { HomeModule } from './components/home/home.module';
import { AboutModule } from './components/about/about.module';
import { BlogModule } from './components/blog/blog.module';
import { ContactModule } from './components/contact/contact.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
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
