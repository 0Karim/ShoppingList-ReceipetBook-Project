import { Component, Input, OnInit } from '@angular/core';
import { Receipe } from '../receipes.model';

@Component({
  selector: 'app-receipes-detail',
  templateUrl: './receipes-detail.component.html',
  styleUrls: ['./receipes-detail.component.css']
})
export class ReceipesDetailComponent implements OnInit {

  @Input() receipe : Receipe;

  constructor() { }

  ngOnInit(): void {
  }

}
