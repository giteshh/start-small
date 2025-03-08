import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {NgStyle} from '@angular/common';


@Component({
  selector: 'app-progress-bar',
  imports: [
    NavbarComponent,
    NgStyle

  ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {

  completedPercentage = 0;
  backgroundColor = 'red';

  onIncrease() {
    if (this.completedPercentage < 100) {
      this.completedPercentage += 10;
      this.updateBackgroundColor();
    }
  }

  updateBackgroundColor() {
    if (this.completedPercentage < 20) {
      return this.backgroundColor = 'red';
    } else if (this.completedPercentage < 40) {
      return this.backgroundColor = 'yellow';
    } else if (this.completedPercentage < 98) {
      return this.backgroundColor = 'orange';
    } else {
      return this.backgroundColor = 'green';
    }
  }
}
