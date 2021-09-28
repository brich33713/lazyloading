import { VivintSmarthomeNavbarComponent } from "src/app/components/navbar-components/vivint-smarthome-navbar/vivint-smarthome-navbar.component";
import { GenericNavbarComponent } from "src/app/components/navbar-components/generic-navbar/generic-navbar.component";
import { DishNavbarComponent } from "src/app/components/navbar-components/dish-navbar/dish-navbar.component";
import { VivintGiftNavbarComponent } from "src/app/components/navbar-components/vivint-gift-navbar/vivint-gift-navbar.component";

export const Navbars = [
    {name: GenericNavbarComponent, role: ["user","admin"],client: []},
    {name: VivintSmarthomeNavbarComponent, role: ["user","admin"], client: ["vivint-smarthome"]},
    {name: DishNavbarComponent, role: ["user","admin"], client: ["dish"]},
    {name: VivintGiftNavbarComponent, role: ["user","admin"], client: ["vivint-gift"]}
];

export const NavbarComponents = []