import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [
    ContactComponent,
    ContactFormComponent
  ]
})
export class ContactModule { }
