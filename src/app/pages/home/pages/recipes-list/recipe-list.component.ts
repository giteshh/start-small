import {Component, Input} from '@angular/core';
import {RecipeInterface} from '../../../../interfaces/recipe-interface';
import {DataService} from '../../../../services/data.service';
import {NgFor, NgIf} from '@angular/common';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-recipe-list',
    imports: [NgFor, NgIf, NavbarComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent {
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
}
