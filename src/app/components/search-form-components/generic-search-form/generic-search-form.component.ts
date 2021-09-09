import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-search-form',
  templateUrl: './generic-search-form.component.html',
  styleUrls: ['./generic-search-form.component.css']
})
export class GenericSearchFormComponent implements OnInit {

  firstNameMsg;
  lastNameMsg;
  phoneNumberMsg;
  accountNumberMsg;
  
  submitForm(){
    console.log("test")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
