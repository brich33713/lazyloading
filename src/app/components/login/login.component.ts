import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMsg;

  isIframe = false;
  loginDisplay = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")) this.router.navigate([""])
    this.isIframe = window !== window.parent && !window.opener;
    
  }

  attemptLogIn(){
    if(this.username == "brandon" && this.password == "test"){
      localStorage.setItem("token","jkafnjnkdnsjnkj")
      this.router.navigate([""])
    } else {
      this.errorMsg = "Invalid Credentials";
    }
  }

  // setLoginDisplay() {
  //   this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  // }

}
