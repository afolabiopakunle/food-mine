import { Food } from './Food';

export interface CartItem {
  food: Food;
  quantity: 1;
  price: Food['price'];
}
