import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentService } from '../layers/services/component.service';
import { UserService } from '../layers/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbar', {read: ViewContainerRef}) navbar: ViewContainerRef;
  user;
  component;
  factory;
    
  constructor(private userService: UserService, 
      private componentService: ComponentService, 
      private componentFactoryResolver: ComponentFactoryResolver,
      private cd: ChangeDetectorRef){
  }
    
    ngOnInit(): void {
    }

    ngAfterViewInit(){
      if(localStorage.getItem("token") !== null){
        this.user = this.userService.getUserInfo(localStorage.getItem("token"));
      } 

      console.log("after before detect")
      if(this.user !== undefined){
        this.component = this.componentService.getNavBar() 
        if(this.component != undefined){
          this.factory = this.componentFactoryResolver.resolveComponentFactory(this.component.name)
          this.navbar.createComponent(this.factory)
        }
        
      }
    }
  }


