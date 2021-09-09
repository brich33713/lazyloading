import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-search-form',
  templateUrl: './dish-search-form.component.html',
  styleUrls: []
})
export class DishSearchFormComponent implements OnInit {
  message;
  company = "dish";
  
  constructor() { }

  ngOnInit(): void {
  }

}
