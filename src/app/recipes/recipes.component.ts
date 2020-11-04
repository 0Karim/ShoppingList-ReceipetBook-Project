import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipes.model';
import { ReceipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ReceipeService]
})
export class RecipesComponent implements OnInit {

  selectedReceipe : Receipe;
  constructor() { }

  ngOnInit(): void {
  }

}
