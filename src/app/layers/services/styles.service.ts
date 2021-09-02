import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }
  
  //placeholder
  stylesheetArr = [
      {name: "DISH", stylesheet: './layers/styles/test-sheet1.css'}
  ]

  //Store stylesheets in database. Grab based on client id or name
  static getStyleSheet(){
    const token = `./layers/styles/${localStorage.token}.css`   
    
    return token
  }
}