import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from '../data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FOODS_TAGS_URL,
  FOODS_BY_SEARCH_URL,
  FOOD_BY_TAG_URL,
  FOODS_URL,
  FOODS_BY_ID_URL,
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getAllFood(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }

  getFoodSearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodByTag(searchTag: string): Observable<Food[]> {
   const result = searchTag === 'All' ? this.getAllFood() : this.http.get<Food[]>(FOOD_BY_TAG_URL + searchTag)
    console.log('RESOLVE: ',FOOD_BY_TAG_URL + searchTag)
    return result;
  }

  getFoodById(foodId: string) {
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId)
  }

}
