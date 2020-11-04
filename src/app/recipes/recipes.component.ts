import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedReceipe : Receipe;
  constructor() { }

  ngOnInit(): void {
  }

}
