import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
