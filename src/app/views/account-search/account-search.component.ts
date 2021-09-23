import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ComponentService } from 'src/app/layers/services/component.service';
import { UserService } from 'src/app/layers/services/user.service';




@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-account-search',
  templateUrl: './account-search.component.html',
  styleUrls: []
})
export class AccountSearchComponent implements OnInit { 
  @ViewChild('infoDisplay', {read: ViewContainerRef}) infoDisplay: ViewContainerRef;
  @ViewChild('searchForm', {read: ViewContainerRef}) searchForm: ViewContainerRef;
  @ViewChild('navbar', {read: ViewContainerRef}) navbar: ViewContainerRef;

  componentFeatures;
  user = this.userService.getUserInfo(localStorage.getItem("token"))
  company = this.user.company
  component;
  factory;

  constructor(private componentService: ComponentService, private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef
    ,private userService: UserService) { }

  ngOnInit(): void {   
  }

  ngAfterViewInit(){
    this.component = this.componentService.getInfoBox()
    if(this.component != undefined){
      this.factory = this.componentFactoryResolver.resolveComponentFactory(this.component.name);
      this.infoDisplay.createComponent(this.factory);
    }

    this.component = this.componentService.getSearchForm()
    this.factory = this.componentFactoryResolver.resolveComponentFactory(this.component.name);
    this.searchForm.createComponent(this.factory);

    this.component = this.componentService.getNavBar()
    this.factory = this.componentFactoryResolver.resolveComponentFactory(this.component.name)
    this.navbar.createComponent(this.factory);

    this.cd.detectChanges()
  }

}
