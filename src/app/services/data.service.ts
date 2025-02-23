import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RecipeInterface } from '../interfaces/recipe-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // getUsers() {
  //   return this.http.get(this.apiUrl + '/users');
  // }

  getRecipes(): Observable<RecipeInterface> {
    return this.http.get<RecipeInterface>(this.apiUrl + '/recipes');
  }

  searchRecipes(query: string): Observable<RecipeInterface> {
    return this.http.get<RecipeInterface>(this.apiUrl + '/recipes/search/' + query);
  }
}
