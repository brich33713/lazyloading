import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionService } from 'src/app/layers/services/functions.service';
import { UserService } from 'src/app/layers/services/user.service';

@Component({
  selector: 'app-vivint-gift-navbar',
  templateUrl: './vivint-gift-navbar.component.html',
  styleUrls: ['./vivint-gift-navbar.component.css']
})
export class VivintGiftNavbarComponent implements OnInit {
  user = this.service.getUserInfo("token")
  logOut = this.functions.logOut

  constructor(private service: UserService, private router: Router, private functions: FunctionService) { }

  ngOnInit(): void {
  }

}
