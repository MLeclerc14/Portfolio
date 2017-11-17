import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [MaterialModule, HttpClientModule,],
  declarations: [HomeComponent]
})
export class HomeModule { }
