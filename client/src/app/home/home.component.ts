 import { Component } from '@angular/core';
 import { HttpClient } from '@angular/http';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  results: string[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://server.dev/api/home').subscribe(res => {
      console.log(res);
      this.results = res.data;
    });
  }
}
