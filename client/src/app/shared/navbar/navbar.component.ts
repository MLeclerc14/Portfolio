import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})
export class NavbarComponent {

  isScrolled = false;
  currentPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;

  constructor() {}

  updateHeader(e) {
    this.currentPos = (window.pageYOffset || e.target.scrollTop) - (e.target.clientTop || 0);
    if (this.currentPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
