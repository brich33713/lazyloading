import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from "jquery";
import { UserService } from 'src/app/layers/services/user.service';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: []
})
export class SearchFormComponent implements OnInit {
  company = this.user.getUserInfo(localStorage.getItem("token")).company

  

  submitForm(event){
    event.preventDefault()
    let form = $("#formT").serialize()
    console.log(form)
  }

  constructor(private user: UserService) { }

  ngOnInit(): void {
    console.log("test")
  }

}
