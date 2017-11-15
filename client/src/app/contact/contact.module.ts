import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [
    ContactComponent,
    ContactFormComponent
  ]
})
export class ContactModule { }
