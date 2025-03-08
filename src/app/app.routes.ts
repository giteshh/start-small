import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SearchRecipesComponent} from './pages/home/pages/search-recipes/search-recipes.component';
import {ProgressBarComponent} from './pages/home/pages/progress-bar/progress-bar.component';
import {RecipeListComponent} from './pages/home/pages/recipes-list/recipe-list.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search-recipes', component: SearchRecipesComponent},
  {path: 'recipe-list', component: RecipeListComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
];
