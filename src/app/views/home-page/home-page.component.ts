import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { ComponentService } from "src/app/layers/services/component.service";
import { UserService } from "src/app/layers/services/user.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: []  
})

export class HomePageComponent implements OnInit {
    @ViewChild('displayContainer', {read: ViewContainerRef}) displayContainter: ViewContainerRef;
    @ViewChild('navbar', {read: ViewContainerRef}) navbar: ViewContainerRef;
    user = this.userService.getUserInfo(localStorage.getItem("token"));
    component;
    factory;
    
    constructor(private userService: UserService, 
        private componentService: ComponentService, 
        private componentFactoryResolver: ComponentFactoryResolver,
        private cd: ChangeDetectorRef){
    }
    
    ngOnInit(): void {}

    ngAfterViewInit(){
    
    // adds component for main display
      this.component = this.componentService.getHomePageLayout() 
      this.factory = this.componentFactoryResolver.resolveComponentFactory(this.component.name)
      this.displayContainter.createComponent(this.factory)

    // adds component for navbar
      this.component = this.componentService.getNavBar()
      this.factory = this.componentFactoryResolver.resolveComponentFactory(this.component.name)
      this.navbar.createComponent(this.factory);
      
      this.cd.detectChanges()

    }
    
}