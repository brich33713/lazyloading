import { DishSearchFormComponent } from "src/app/components/search-form-components/dish-search-form/dish-search-form.component";
import { VivintSearchFormComponent } from "src/app/components/search-form-components/vivint-search-form/vivint-search-form.component";
import { VivintSwitchSearchFormComponent } from "src/app/components/search-form-components/vivint-switch-search-form/vivint-switch-search-form.component";
import { GenericSearchFormComponent } from "src/app/components/search-form-components/generic-search-form/generic-search-form.component";
import { VivintSmarthomeSearchFormComponent } from "src/app/components/search-form-components/vivint-smarthome-search-form/vivint-smarthome-search-form.component";


export const searchForms = [
    {name: DishSearchFormComponent, role: ["user","admin"], client: ["dish"]}
    ,{name: VivintSearchFormComponent, role: ["user","admin"], client: ["vivint","vivint-gift","efg-partnersweb"]}
    ,{name: VivintSwitchSearchFormComponent, role: ["user","admin"], client: ["vivint-switch"]}
    ,{name: VivintSmarthomeSearchFormComponent, role: ["user","admin"], client: ["vivint-smarthome"]}
    ,{name: GenericSearchFormComponent, role: ["user","admin"], client: []}
];

export const searchFormComponents = 
    [
    DishSearchFormComponent
    ,VivintSearchFormComponent
    ,VivintSwitchSearchFormComponent
    ,VivintSmarthomeSearchFormComponent
    ,GenericSearchFormComponent
    ]