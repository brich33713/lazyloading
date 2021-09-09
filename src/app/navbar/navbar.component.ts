import { Component, OnInit } from '@angular/core';
import { UserService } from '../layers/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = this.userService.getUserInfo(localStorage.getItem("token"))
  company = this.user.company;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
