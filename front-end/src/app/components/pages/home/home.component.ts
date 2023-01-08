import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let foodsObservable: Observable<Food[]>;
      if(params['searchTerm']) {
        foodsObservable = this.foodService.getFoodSearchTerm(params['searchTerm']);
      } else if(params['tag']) {
        foodsObservable = this.foodService.getAllFoodByTag(params['tag']);
      } else {
        foodsObservable = this.foodService.getAllFood();
      }

      foodsObservable.subscribe(serverFoods => {
        this.foods = serverFoods;
      })
    })
  }

  findFood(value: string) {
    if(value === '') {
      this.ngOnInit();
      return
    }
    this.foodService.getFoodSearchTerm(value)
      .subscribe(serverFoods => {
        this.foods = serverFoods;
      });
  }
}
