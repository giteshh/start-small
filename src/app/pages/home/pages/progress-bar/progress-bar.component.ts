import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgStyle} from '@angular/common';


@Component({
  selector: 'app-progress-bar',
  imports: [
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    NgStyle
  ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {

  completedPercentage = 0;
  backgroundColor = '';
  // registerForm: FormGroup;

  name = '';
  email = '';
  occupation = '';
  mobile = '';
  password = '';

  constructor() {
    this.updateBackgroundColor();
  }

  onFromCompletion() {
    if (this.completedPercentage < 100) {
        const totalInput = 5;
        const filledInputs = [
          this.name,
          this.email,
          this.occupation,
          this.mobile.toString(),
          this.password
        ].filter(input => input.trim().length > 0).length
        this.completedPercentage = (filledInputs / totalInput) * 100;
    }
  }

  updateBackgroundColor() {
    if (this.completedPercentage === 20) {
      return this.backgroundColor = 'red';
    } else if (this.completedPercentage === 40) {
      return this.backgroundColor = 'orange';
    } else if (this.completedPercentage === 60) {
      return this.backgroundColor = 'yellow';
    } else if (this.completedPercentage === 80) {
      return this.backgroundColor = 'green';
    } else {
      return this.backgroundColor = 'green';
    }
  }
}
