import { Component } from '@angular/core';
import { UserService } from './layers/services/user.service';


@Component({
  selector: 'app-test',
  templateUrl: '',
  styleUrls: []
})

export class TestComponent {
    static get css2() {
        let user = new UserService().getUserInfo(localStorage.getItem("token"));
      let data = [
      {name: "", company: "dish"}
      ] 
    
        let comp = data.find(c => c.company == user.company)
        return comp.company;
      }
}