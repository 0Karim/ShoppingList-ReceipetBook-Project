import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../receipes.model';
import { ReceipeService } from '../recipe.service';

@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css'],
})
export class ReceipesListComponent implements OnInit {

  receipes : Array<Receipe>;

  @Output() receipeWasSelected = new EventEmitter<Receipe>();

  constructor(private recipeService : ReceipeService) 
  { }

  ngOnInit(): void 
  {
    this.receipes = this.recipeService.getReceipe();
  }

  onReceipeSelected(receipe : Receipe)
  {
    console.log(2);
    console.log(receipe);
    this.receipeWasSelected.emit(receipe);
  }

}
