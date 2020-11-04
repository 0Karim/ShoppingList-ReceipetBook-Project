import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receipe } from '../../receipes.model';

@Component({
  selector: 'app-receipes-item',
  templateUrl: './receipes-item.component.html',
  styleUrls: ['./receipes-item.component.css']
})
export class ReceipesItemComponent implements OnInit {

  @Input() receipe: Receipe;
  @Output() receipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected()
  {
    console.log(1);
    this.receipeSelected.emit();
  }

}
