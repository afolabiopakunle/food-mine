import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';

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
      if(params['searchTerm']) {
        this.foods = this.foodService.getFoodSearchTerm(params['searchTerm'])
      } else if(params['tag']) {
        console.log(params)
        this.foods = this.foodService.getAllFoodByTag(params['tag'])
      } else {
        this.foods = this.foodService.getAllFood();
      }
    })
  }

  findFood(value: string) {
    this.foods = this.foodService.getFoodSearchTerm(value)
  }
}
