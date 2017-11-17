import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [MaterialModule],
  declarations: [HomeComponent]
})
export class HomeModule { }
