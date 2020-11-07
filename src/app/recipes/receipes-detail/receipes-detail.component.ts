import { Component, Input, OnInit } from '@angular/core';
import { Receipe } from '../receipes.model';
import { ReceipeService } from '../recipe.service';

@Component({
  selector: 'app-receipes-detail',
  templateUrl: './receipes-detail.component.html',
  styleUrls: ['./receipes-detail.component.css']
})
export class ReceipesDetailComponent implements OnInit {

  @Input() receipe : Receipe;

  constructor(private receipeService : ReceipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList()
  {
    this.receipeService.AddIngredeintsToShoppingList(this.receipe.ingredients);
  }
}
