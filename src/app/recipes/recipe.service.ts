import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Receipe} from './receipes.model';

@Injectable()

export class ReceipeService
{
    private receipes : Array<Receipe> = [
        new Receipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
            new Ingredient("Meat" , 1),
            new Ingredient("French Frise" , 20),
        ]),
        
    
        new Receipe('Big Fat Burger',
        'What else you need to say?', 
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
            new Ingredient('Buns' , 2),
            new Ingredient("Meat" , 1)
        ]),
      ];

      recipeSelected : EventEmitter<Receipe> = new EventEmitter<Receipe>();

      /**
       *
       */
      constructor(private shoppingListService : ShoppingListService) {}

      getReceipe(){
          return this.receipes.slice(); //slice() will return a new copy from the receipes array not a refrence to it
      }

      AddIngredeintsToShoppingList(ingredeints : Ingredient[])
      {
          this.shoppingListService.addIngredients(ingredeints);
      }
}