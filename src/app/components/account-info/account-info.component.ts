import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/layers/services/user.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  user = this._service.getUserInfo("token");
  source = this.user.company == "dish" ? "assets/images/dish-account-info.PNG" : ""

  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }

}
