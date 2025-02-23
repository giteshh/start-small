import {Component} from '@angular/core';
import {SearchComponent} from '../search/search.component';
import {RecipeInterface} from '../../../../interfaces/recipe-interface';
import {DataService} from '../../../../services/data.service';
import {CommandModule} from '@angular/cli/src/command-builder/command-module';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-recipes',
  imports: [SearchComponent, NgForOf],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  recipes: RecipeInterface[] = [];

  constructor(private dataService: DataService) {
    this.getRecipes();
  }

  getRecipes() {
    this.dataService.getRecipes().subscribe((res: any) => {
      this.recipes = res.recipes;
      console.log(res.recipes)
    });
  }

  trackByFn(index: number, item: any): number {
    return item.id; // Return the unique identifier (e.g., 'id')
  }
}
