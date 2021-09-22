import { GenericHomePageComponent } from "src/app/components/home-page-components/generic-home-page/generic-home-page.component";
import { VivintSmarthomeHomePageComponent } from "src/app/components/home-page-components/vivint-smarthome-home-page/vivint-smarthome-home-page.component";

export const homePages = [
    {name: GenericHomePageComponent, role: ["user","admin"],client: []},
    {name: VivintSmarthomeHomePageComponent, role: ["user","admin"],client: ["vivint-smarthome"]}
];

export const homePageComponents = [GenericHomePageComponent, VivintSmarthomeHomePageComponent]