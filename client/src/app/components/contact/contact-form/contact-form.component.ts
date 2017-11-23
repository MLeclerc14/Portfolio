import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { Contact } from '../../../models/contact.model';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  constructor(
    private http: HttpClient,
    private contactService: ContactService,
    public snackbar: MatSnackBar
  ) {}

  onSubmit() {
    this.contactService.postContactForm().subscribe((response) => {
      this.snackbar.open('Votre message a bien été envoyé !', 'Fermer', {
        duration: 3000
      });
    });
  }
}
