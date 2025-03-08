import {Component} from '@angular/core';
import {RecipeInterface} from '../../../../interfaces/recipe-interface';
import {DataService} from '../../../../services/data.service';
import {NavbarComponent} from '../navbar/navbar.component';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filter-recipe',
  imports: [
    NavbarComponent,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './filter-recipe.component.html',
  styleUrl: './filter-recipe.component.css'
})
export class FilterRecipeComponent {
  cuisineOptions = [
    'Indian', 'Italian', 'Asian', 'American', 'Mexican', 'Mediterranean',
    'Pakistani', 'Korean', 'Japanese', 'Moroccan', 'Greek', 'Thai',
    'Smoothie ', 'Turkish', 'Russian', 'Lebanese', 'Brazilian',
  ];

  cookingTime = [
    0, 10, 15, 20, 25, 30, 35, 40, 45
  ];

  recipes: RecipeInterface[] = [];
  isLoading = true;
  loadingCards = [1, 2, 3, 4, 5, 6, 7, 8];
  selectedCuisine: any;
  selectedCookingTime: any;

  constructor(private dataService: DataService) {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.dataService.getRecipes().subscribe((res: any) => {
      this.recipes = res.recipes;
      this.isLoading = false;
    });
  }

  applyFilter(cuisine: string) {
    this.dataService.getRecipes().subscribe((res: any) => {
      this.recipes = res.recipes.filter((recipe: RecipeInterface) =>
        recipe.cuisine.toLowerCase().includes(cuisine.toLowerCase())
      );
    });
  }

  filterByCuisine($event: Event) {
    const cuisine = ($event.target as HTMLSelectElement).value;
    this.selectedCuisine = cuisine;
    this.applyFilter(cuisine);

    if (cuisine === 'all') {
      this.getAllRecipes();
    }
  }

  applySorting(cookingTime: string) {
    this.dataService.getRecipes().subscribe((res: any) => {
      this.recipes = res.recipes.filter((recipe: RecipeInterface) =>
        recipe.cookTimeMinutes.toString() === cookingTime.toString()
      );
    });
  }

  sortByCookingTime($event: Event) {
    const cookingTime = ($event.target as HTMLSelectElement).value;
    this.selectedCookingTime = cookingTime;
    this.applySorting(cookingTime);
    if (cookingTime === 'all') {
      this.getAllRecipes();
    }
  }
}
