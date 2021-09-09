import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-search-form',
  templateUrl: './dish-search-form.component.html',
  styleUrls: []
})
export class DishSearchFormComponent implements OnInit {
  message;
  company = "dish";
  
  testFunc(){
    console.log(document.getElementById("test"))
  }

  constructor() { }

  ngOnInit(): void {
  }

}
