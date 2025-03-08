import {Component, EventEmitter, Output} from '@angular/core';
import {DataService} from '../../../../services/data.service';
import {RecipeInterface} from '../../../../interfaces/recipe-interface';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
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
