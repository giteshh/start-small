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
      routerLink: '/recipes'
    },
    {
      name: 'Progress bar',
      description: 'Custom progress bar',
      routerLink: '/progress-bar'
    },
  ]

}
