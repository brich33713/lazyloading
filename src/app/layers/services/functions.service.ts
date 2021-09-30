import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
export class FunctionService {
    constructor(private router:Router, private url: ActivatedRoute){}

    logOut(){
        localStorage.removeItem("token")
    }

}