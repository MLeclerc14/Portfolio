import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Contact } from './contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contact = new Contact('', '', '');
  results: string[];

  constructor(public snackbar: MatSnackBar, private http: HttpClient) {}

  onSubmit() {
    this.http.get('/api/items').subscribe(
      data => {
        this.results = data['results'];
        this.snackbar.open('Votre message a bien été envoyé !', 'Fermer', {
          duration: 3000
        });
      },
      error => console.log(error)
    );
  }
}
