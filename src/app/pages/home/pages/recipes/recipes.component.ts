import {Component, Input} from '@angular/core';
import {SearchComponent} from '../search/search.component';
import {RecipeInterface} from '../../../../interfaces/recipe-interface';
import {DataService} from '../../../../services/data.service';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-recipes',
  imports: [SearchComponent, NgFor, NgIf],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  @Input() searchedRecipe: any;
  recipes: RecipeInterface[] = [];
  isLoading = true;
  loadingCards = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private dataService: DataService) {
    this.getRecipes();
  }

  getRecipes() {
    this.dataService.getRecipes().subscribe((res: any) => {
      this.recipes = res.recipes;
      this.isLoading = false;
    });
  }

  onSearchRecipes(filteredRecipes: RecipeInterface[]) {
     this.recipes = filteredRecipes;
  }
}
