import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../receipes.model';

@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']
})
export class ReceipesListComponent implements OnInit {

  receipes : Array<Receipe> = [
    new Receipe('A Test Receipe' , 
    'this is simply a test' , 
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),

    new Receipe('A Test Receipe' , 
    'this is simply a test' , 
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872')
  ];

  @Output() receipeWasSelected = new EventEmitter<Receipe>();

  constructor() { }

  ngOnInit(): void 
  {

  }

  onReceipeSelected(receipe : Receipe)
  {
    console.log(2);
    console.log(receipe);
    this.receipeWasSelected.emit(receipe);
  }

}
