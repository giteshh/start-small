import {Component, Input} from '@angular/core';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {RecipeInterface} from '../../../../interfaces/recipe-interface';
import {DataService} from '../../../../services/data.service';
import {NgFor, NgIf} from '@angular/common';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-search-recipes',
    imports: [SearchBarComponent, NgFor, NgIf, NavbarComponent],
  templateUrl: './search-recipes.component.html',
  styleUrl: './search-recipes.component.scss',
})
export class SearchRecipesComponent {
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
