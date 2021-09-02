import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserInfo(token){
    return {
      name: "User Name",
      role: "admin",
      company: "DIISH"
    }
  }

  getUserCompany(token){
    return "DISH";
  }
}
