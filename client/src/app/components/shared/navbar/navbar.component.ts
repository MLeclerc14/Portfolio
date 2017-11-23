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
  /** Position window variables **/
  isScrolled: boolean = false;
  currentPos: number = 0;
  startPos: number = 0;
  changePos: number = 100;

  /** Change class header on scroll **/
  updateHeader(e) {
    this.currentPos = (window.pageYOffset || e.target.scrollTop) - (e.target.clientTop || 0);
    if (this.currentPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
