import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class FunctionService {
    logOut(){
        localStorage.removeItem("token")
    }
}