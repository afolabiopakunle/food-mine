import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent implements OnInit {

  @Input() foods: Food[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
