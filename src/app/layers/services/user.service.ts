import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  // {name: DishSearchFormComponent, role: ["user","admin"], client: ["dish"]}
  //   ,{name: VivintSearchFormComponent, role: ["user","admin"], client: ["vivint","vivint-gift","efg-partnersweb"]}
  //   ,{name: VivintSwitchSearchFormComponent, role: ["user","admin"], client: ["vivint-switch"]}
  //   ,{name: VivintSmarthomeSearchFormComponent, role: ["user","admin"], client: ["vivint-smarthome"]}


  constructor() { }

  getUserInfo(token){
    return {
      name: "User Name",
      role: "user",
      company: "efg-partnersweb"
    }
  }

  getUserCompany(token){
    let user = this.getUserInfo(token)
    return user.company;
  }
}
