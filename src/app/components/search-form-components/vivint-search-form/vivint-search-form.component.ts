import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/layers/services/user.service';

@Component({
  selector: 'app-vivint-search-form',
  templateUrl: './vivint-search-form.component.html',
  styleUrls: []
})
export class VivintSearchFormComponent implements OnInit {
  message;
  user = this._service.getUserInfo("token");

  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }

}
