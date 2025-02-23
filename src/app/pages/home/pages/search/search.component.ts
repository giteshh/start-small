import {Component, EventEmitter, Output} from '@angular/core';
import {DataService} from '../../../../services/data.service';
import {RecipeInterface} from '../../../../interfaces/recipe-interface';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: string = '';
  @Output() searchResults = new EventEmitter<RecipeInterface[]>();

  constructor(private dataService: DataService) {
  }

  searchRecipe() {
    if (this.searchTerm.trim() === '') {
      this.searchResults.emit([]);
      return;
    }

    this.dataService.getRecipes().subscribe((res: any) => {
      const filteredRecipes = res.recipes.filter((recipe: RecipeInterface) =>
        recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      this.searchResults.emit(filteredRecipes);
    });
  }
}
