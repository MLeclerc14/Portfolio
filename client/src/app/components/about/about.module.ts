import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../shared/material.module';
import { AboutComponent } from './about.component';


@NgModule({
  imports: [MaterialModule, BrowserModule],
  exports: [],
  declarations: [AboutComponent]
})
export class AboutModule { }
