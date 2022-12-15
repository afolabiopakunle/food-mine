import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food | null;
  constructor(private activatedRoute: ActivatedRoute,
              private foodService: FoodService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      if(param['id']) {
        this.food = this.foodService.getFoodById(param['id']);
      }
    })
  }

}
