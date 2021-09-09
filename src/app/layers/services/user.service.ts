import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserInfo(token){
    return {
      name: "User Name",
      role: "user",
      company: "vivint-smarthome"
    }
  }

  getUserCompany(token){
    return "DISH";
  }
}
