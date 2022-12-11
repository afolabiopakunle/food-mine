import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from '../data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood(): Food[] {
    return sample_foods
  }

  getFoodSearchTerm(searchTerm: string) {
    return this.getAllFood().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodByTag(searchTag: string): Food[] {
   return searchTag === 'All' ? this.getAllFood() : this.getAllFood().filter(food => food.tags.includes(searchTag))
  }

}
