import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/layers/services/user.service';

@Component({
  selector: 'app-vivint-smarthome-search-form',
  templateUrl: './vivint-smarthome-search-form.component.html',
  styleUrls: ['./vivint-smarthome-search-form.component.css']
})
export class VivintSmarthomeSearchFormComponent implements OnInit {
  user = this._service.getUserInfo("token")
  lastNameMsg;
  accountNumberMsg;

  
  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }

}
