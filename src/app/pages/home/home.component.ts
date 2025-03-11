import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  items = [
    {
      name: 'Recipes List',
      description: 'Recipe list using dummy api',
      routerLink: '/recipe-list'
    },
    {
      name: 'Search Recipe',
      description: 'Search a recipe from a list of recipes',
      routerLink: '/search-recipes'
    },
    {
      name: 'Filter Recipe',
      description: 'Filter & Sorting recipes',
      routerLink: '/filter-recipes'
    },
    {
      name: 'Progress bar',
      description: 'Custom progress bar',
      routerLink: '/progress-bar'
    },
    {
      name: 'Image Carousel',
      description: 'Custom carousel',
      routerLink: '/image-carousel'
    },
    {
      name: 'Otp Input',
      description: 'Custom otp input component',
      routerLink: '/otp-input'
    },
    {
      name: 'Star Rating',
      description: 'Star rating component',
      routerLink: '/star-rating'
    },
    {
      name: 'Like & Follow Button',
      description: 'Like & follow functionality',
      routerLink: '/like-button'
    },
    {
      name: 'Counter app',
      description: 'Counter app',
      routerLink: '/counter'
    },
    {
      name: 'Dictionary app',
      description: 'Dictionary app',
      routerLink: '/dictionary-app'
    },
  ]

}
