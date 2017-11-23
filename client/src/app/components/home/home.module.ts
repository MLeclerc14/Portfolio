import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../shared/material.module';
import { HomeComponent } from './home.component';
import { HomeService } from '../../services/home.service';

@NgModule({
  imports: [BrowserModule, MaterialModule, HttpClientModule,],
  declarations: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule { }
