import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//placeholder until database is built
import { AccountInfoComponent } from 'src/app/components/account-info/account-info.component';
import { SearchFormComponent } from 'src/app/components/search-form/search-form.component';


@Injectable({
    providedIn: 'root'
  })
export class ComponentFeaturesRepository {
    constructor(private http: HttpClient){}
    
    getComponentFeaturesById(id){
        //let arr = this.http.get("").subscribe()
        
        this.http;
        let arr = [
            {name: AccountInfoComponent,role: "user", type: "info-display"},
            {name: SearchFormComponent,role: "user", type: "search"}
        ]

        return arr;
    }
}