import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule }   from '../shared/material.module';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactService }       from '../../services/contact.service';

@NgModule({
  imports: [
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [
    ContactFormComponent
  ],
  providers: [ContactService]
})
export class ContactModule { }
