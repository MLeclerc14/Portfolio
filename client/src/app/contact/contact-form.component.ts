import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contact = new Contact();
  results: string[];

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.get('/api/items').subscribe(
      data => this.results = data['results'],
      err => console.log(error)
    });
  }
}
