import {Component} from '@angular/core';
import {DataService} from '../../../../services/data.service';
import {RecipeInterface} from '../../../../interfaces/recipe-interface';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-image-carousel',
  imports: [
    NavbarComponent
  ],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent {
  recipes: RecipeInterface[] = [];
  image = '';

  constructor(private dataService: DataService) {
    this.getAllRecipesImages();
  }

  getAllRecipesImages() {
    this.dataService.getRecipes().subscribe((res: any) => {
      this.recipes = res.recipes;
      this.image = this.recipes[0].image;
    });
  }

  onNextImage() {
    const currentIndex = this.recipes.findIndex(recipe => recipe.image === this.image);
    const nextIndex = currentIndex + 1;
    if (nextIndex >= this.recipes.length) {
      this.image = this.recipes[0].image;
    } else {
      this.image = this.recipes[nextIndex].image;
    }
  }

  onPreviousImage() {
    const currentIndex = this.recipes.findIndex(recipe => recipe.image === this.image);
    const previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
      this.image = this.recipes[this.recipes.length - 1].image;
    } else {
      this.image = this.recipes[previousIndex].image;
    }
  }

}
