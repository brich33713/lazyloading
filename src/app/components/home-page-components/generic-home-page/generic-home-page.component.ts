import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/layers/services/user.service';

@Component({
  selector: 'app-generic-home-page',
  templateUrl: './generic-home-page.component.html',
  styleUrls: ['./generic-home-page.component.css']
})
export class GenericHomePageComponent implements OnInit {
  
  user = this.service.getUserInfo("token");

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }

}
