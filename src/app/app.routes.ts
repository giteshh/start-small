import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SearchRecipesComponent} from './pages/home/pages/search-recipes/search-recipes.component';
import {ProgressBarComponent} from './pages/home/pages/progress-bar/progress-bar.component';
import {RecipeListComponent} from './pages/home/pages/recipes-list/recipe-list.component';
import {FilterRecipeComponent} from './pages/home/pages/filter-recipe/filter-recipe.component';
import {ImageCarouselComponent} from './pages/home/pages/image-carousel/image-carousel.component';
import {OtpInputComponent} from './pages/home/pages/otp-input/otp-input.component';
import {StarRatingComponent} from './pages/home/pages/star-rating/star-rating.component';
import {LikeButtonComponent} from './pages/home/pages/like-button/like-button.component';
import {CounterComponent} from './pages/home/pages/counter/counter.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search-recipes', component: SearchRecipesComponent},
  {path: 'recipe-list', component: RecipeListComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'filter-recipes', component: FilterRecipeComponent},
  {path: 'image-carousel', component: ImageCarouselComponent},
  {path: 'otp-input', component: OtpInputComponent},
  {path: 'star-rating', component: StarRatingComponent},
  {path: 'like-button', component: LikeButtonComponent},
  {path: 'counter', component: CounterComponent},
];
