 import { Component } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  /** Education accordeon navigation **/
  step: number = -1;

  /** Skills */
  webLanguages: any[] = [
    { name: 'HTML5/CSS3', value: 80 },
    { name: 'PHP7/MySQL', value: 80 },
    { name: 'Javascript', value: 70 }
  ];

  backendFrameworks: any[] = [
    { name: 'Laravel 5', value: 80 },
    { name: 'Symfony 2', value: 80 },
    { name: 'ExpressJS', value: 70 }
  ];

  frontendFrameworks: any[] = [
    { name: 'VueJS 2', value: 80 },
    { name: 'Angular 5', value: 80 },
    { name: 'jQuery', value: 70 }
  ];

  /** Hobbies **/
  hobbies: any[] = [
    { icon: 'computer', description: '' },
    { icon: 'headset', description: '' },
    { icon: 'gamepad', description: '' },
    { icon: 'fitness_center', description: ''}
  ];


  /** Methods **/
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
