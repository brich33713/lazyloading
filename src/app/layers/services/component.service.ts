import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//placeholder until database is built
import { AccountInfoComponent } from 'src/app/components/account-info/account-info.component';
import { VivintSearchFormComponent } from 'src/app/components/search-form-components/vivint-search-form/vivint-search-form.component';
import { UserService } from './user.service';
import { InfoBoxes } from '../repositories/InfoBox.repository';
import { searchForms } from '../repositories/SearchComponent.repository';
import { homePages } from '../repositories/HomePage.repository';
import { Navbars } from '../repositories/NavBar.repository';
import { FileProcessingLayouts } from '../repositories/FileProcessing.repository';


@Injectable({
    providedIn: 'root'
  })
export class ComponentService {
    constructor(private http: HttpClient, private _service: UserService){}

    getHomePageLayout(){
        let token = localStorage.getItem("token");
        let user = this._service.getUserInfo(token);
        let returnedLayout = homePages.find(p => p.role.includes(user.role) && p.client.includes(user.company))
        returnedLayout = returnedLayout != undefined ? returnedLayout : homePages.find(p => p.role.includes(user.role) && p.client.length == 0)
        return returnedLayout;
    }

    getNavBar(){
        let token = localStorage.getItem("token");
        let user = this._service.getUserInfo(token);
        let returnedNavBar = Navbars.find(navbar => navbar.role.includes(user.role) && navbar.client.includes(user.company))
        returnedNavBar = returnedNavBar != undefined ? returnedNavBar : Navbars.find(navbar => navbar.role.includes(user.role) && navbar.client.length == 0)
        return returnedNavBar;
    }

    getSearchForm(){
        let token = localStorage.getItem("token");
        let user = this._service.getUserInfo(token);
        let returnedForm = searchForms.find(form => form.role.includes(user.role) && form.client.includes(user.company))
        returnedForm = returnedForm != undefined ? returnedForm : searchForms.find(form => form.role.includes(user.role) && form.client.length == 0)
        return returnedForm;
    }

    getInfoBox(){
        let token = localStorage.getItem("token");
        let user = this._service.getUserInfo(token);

        let returnedVal = InfoBoxes.find(box => box.role.includes(user.role) && box.client.includes(user.company))
        return returnedVal;
    }

    getFileProcessingLayout(){
        let token = localStorage.getItem("token");
        let user = this._service.getUserInfo(token);
        let returnedLayout = FileProcessingLayouts.find(fp => fp.role.includes(user.role) && fp.client.includes(user.company))
        returnedLayout = returnedLayout != undefined ? returnedLayout : FileProcessingLayouts.find(fp => fp.role.includes(user.role) && fp.client.length == 0)
        return returnedLayout;
    }


}