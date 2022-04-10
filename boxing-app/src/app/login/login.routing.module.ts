import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../not-found/not-found.component";
import { LoginComponent } from "./login-page/login-page.component";
//import { BoxerInfoComponent } from "./boxer-info/boxer-info.component";
//import { BoxersListComponents } from "./boxers-list/boxers-list.component";


const boxerRoutes: Routes = [
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports:[
        RouterModule.forChild(boxerRoutes)
    ],

    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule { }