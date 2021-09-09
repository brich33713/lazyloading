import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//placeholder until database is built
import { AccountInfoComponent } from 'src/app/components/account-info/account-info.component';
import { VivintSearchFormComponent } from 'src/app/components/search-form-components/vivint-search-form/vivint-search-form.component';
import { UserService } from '../services/user.service';
import { searchForms } from './SearchComponent.repository';


@Injectable({
    providedIn: 'root'
  })
export class ComponentFeaturesRepository {
    constructor(private http: HttpClient, private _service: UserService){}
    
    getComponentFeaturesById(id){
        //let arr = this.http.get("").subscribe()

        this.http;
        let arr = [
            {name: AccountInfoComponent,role: "user", type: "info-display"},
            {name: VivintSearchFormComponent, role: "user", type: "search"}
        ]
        return arr;
    }

    getSearchForm(){
        let token = localStorage.getItem("token");
        console.log(token)
        let user = this._service.getUserInfo(token);
        console.log(user)
        let returnedForm = searchForms.find(form => form.role.includes(user.role) && form.client.includes(user.company))
        returnedForm = returnedForm != undefined ? returnedForm : searchForms.find(form => form.role.includes(user.role) && form.client.length == 0)
        return returnedForm;
    }
}