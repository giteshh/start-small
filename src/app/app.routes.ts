import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SearchComponent} from './pages/home/pages/search/search.component';
import {RecipesComponent} from './pages/home/pages/recipes/recipes.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'recipes', component: RecipesComponent},
];
