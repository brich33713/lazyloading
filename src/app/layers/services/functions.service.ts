import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
export class FunctionService {
    constructor(private router:Router){}

    logOut(){
        localStorage.removeItem("token")
    }

    route(destination){
        console.log(destination)
        this.router.navigate([destination])
    }
}