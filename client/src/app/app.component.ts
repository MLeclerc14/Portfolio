import { Component } from '@angular/core';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getState(outlet) {
    console.log(outlet.activatedRouteData);
    return outlet.activatedRouteData.state;
  }

}
