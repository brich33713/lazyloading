import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ComponentService } from 'src/app/layers/services/component.service';
import { UserService } from 'src/app/layers/services/user.service';
import { NavbarComponent } from 'src/app/navbar/navbar.component';




@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-account-search',
  templateUrl: './account-search.component.html',
  styleUrls: []
})
export class AccountSearchComponent implements OnInit {
  // Would be something along the lines of get from database every feature matching this
  // component id in the ComponentFeatures table.
  // Ex: Maybe the javascript version of
  // public List<ComponentFeatures> GetComponentFeaturesByComponentId(int componentId){
  //    return _context.ComponentFeatures.Where(cf => cf.ComponentId == componentId)
  //    }
  //
  // componentFeatures = [];
  // In constructor, need to inject context or repository or model
  //
  // In ngOnInit, set componentFeatures to ComponentFeatureRepository.GetComponentFeaturesByComponentId(componentId)

  
  

  //then loop over the returned array and for each feature createComponent and pass in role and additional information where necessary. 
  // Each will have an individual template for processing the roles and conditional displays


  //placeholders until code is written
  componentId = 1;
  
  @ViewChild('infoDisplay', {read: ViewContainerRef}) infoDisplay: ViewContainerRef;
  @ViewChild('searchForm', {read: ViewContainerRef}) searchForm: ViewContainerRef;

  

  componentFeatures;
  user = this.userService.getUserInfo(localStorage.getItem("token"))
  company = this.user.company
  component;
  factory;

  

  constructor(private componentService: ComponentService, private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef
    ,private userService: UserService) { }

  ngOnInit(): void {
    this.componentFeatures = this.componentService.getComponentFeaturesById(this.componentId)    
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

    this.cd.detectChanges()
  }

}
