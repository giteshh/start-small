import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-star-rating',
  imports: [
    NavbarComponent,
    NgForOf,
    NgStyle
  ],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {

  stars = [1, 2, 3, 4, 5];
  rating = 0;
  starColor = 'grey';

  setRating(event: any, index: number) {
    const star = event.target as HTMLElement;

    if (star.style.color === 'grey') {
      star.style.color = 'orange';
      this.rating = index + 1;
    } else {
      star.style.color = 'grey';
      this.rating--;
    }
  }

}
