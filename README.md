# LazyLoading

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## App Flow

1. User logs in. Token is created.
2. Token is used give access to routes and contain user info. Assuming this would be stored in a database. Users table would contain multiple columns, but as of now main levers are user.role and user.company.
3. If it's a component specific route, page will be displayed if user has access.
4. If it's a multi-client route it will have a base template. Logic is written to check matching repo for each dynamic section. If component can be found with matching role and/or company, it's displayed. If not, generic component is displayed or div is left empty.

## App Structure

Organized by folders
Folders:

1. Components
2. Guards - route guards
3. Layers - contains repositories, services, and styles
4. Views - contains all modules for routes that apply to multiple clients


## Repositories

Folder contains file for each type of component i.e. HomePage.repository.ts. Each file imports components of the same type, exports array of
Objects named by type with and s, and array of components nambed by type + Components.

Ex: 

import { GenericHomePageComponent } from "src/app/components/home-page-components/generic-home-page/generic-home-page.component";
import { VivintSmarthomeHomePageComponent } from "src/app/components/home-page-components/vivint-smarthome-home-page/vivint-smarthome-home-page.component";

export const homePages = [
    {name: GenericHomePageComponent, role: ["user","admin"],client: []},
    {name: VivintSmarthomeHomePageComponent, role: ["user","admin"],client: ["vivint-smarthome"]}
];

export const homePageComponents = [GenericHomePageComponent, VivintSmarthomeHomePageComponent]

homePages - will be used throughout app. Role and/or client key will be used to filter which Component to display
homePageComponents - declared and exported on module for matching type

## Services

For services that will be used throughout app. Currently has component service that contains methods for calling a particular component,
user service that contains methods for getting user information, and styles that would contain methods for dynamic styling separate from
stylesheets i.e. getLogo

## Styles

Contains all css files except main styles.css. Each file in this folder will be imported on style.css file. Css files need to be edited to have company
name as class preceeding or so that only css will be applied to correct client users. 

Ex:

.dish .navbar-inverse .navbar-brand {
    color: black;
    font-weight: bolder;
}

## Views

Certain routes will be used by multiple clients, but will display different to end user based on the client they are associated with.

## Modules

Run `ng g m moduleName --routing` to create. Module html file will contain base template that will be dynamically loaded based on the user role, client, etc.

On html file, where you dynamic displaying:

<div #componentTypeName></div>

On .component.ts in order to dynamically load components,

1. add ViewChild, ViewContainerRef, ChangeDetectorRef to import from @angular/core
2. in the class, 
        a. add @ViewChild('componentTypeName', {read: ViewContainerRef}) componentTypeName: ViewContainerRef;
        b. add component;
        c. add factory;
        d. add ngAfterViewInit(){}
3. to the constructor add,
        a. private componentService: ComponentService -- service has multiple methods to get necessary components
        b. private componentFactoryResolver: ComponentFactoryResolver - will create factory needed to pass into ViewContainerRef.createComponent method
        c. private cd: ChangeDetectorRef -- need to detect changes because components are loaded in AfterViewInit

4. to ngAfterViewInit add for every component being dynamically loaded,

        a. this.component = this.componentService .getComponentTypeName for ex: .getNavBar
        b. this.factory = this.componentFactoryResolver.resolveComponentFactory(this.component.name)
        c. this.componentTypeName.createComponent(this.factory); ex: this.component.navbar.createComponent(this.factory)

5. to ngAfterViewInit at very end add, this.cd.detectChanges()


If related to a view, 

1. Add to app.module.ts as an import and to imports array
2. Add to app-routing.module.ts

Ex:

    { 
        path: 'accountSearch', -- naming convention is module name without dashes
        canActivate: [CheckLoggedInGuard], -- other guards can be added, but this guard is in place to make sure user is logged in; without login components can't dynamially load
        loadChildren: () => import('./views/account-search/account-search.module') -- path to module
        .then(m => m.AccountSearchModule)  -- name of exported class on Module file
    }


