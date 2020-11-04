import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receipe } from '../../receipes.model';
import { ReceipeService } from '../../recipe.service';

@Component({
  selector: 'app-receipes-item',
  templateUrl: './receipes-item.component.html',
  styleUrls: ['./receipes-item.component.css']
})
export class ReceipesItemComponent implements OnInit {

  @Input() receipe: Receipe;

  constructor(private recipeService : ReceipeService) { }

  ngOnInit(): void {
  }

  onSelected()
  {
    console.log(1);
    // this.receipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.receipe);
  }

}
