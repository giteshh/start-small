import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-counter',
  imports: [
    NavbarComponent
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count = 0;

  onIncrementCounter() {
    this.count++;
  }

  onDecrementCounter() {
    if (this.count !== 0) {
      this.count--;
    }
  }

  onResetCounter() {
    this.count = 0;
  }

}
