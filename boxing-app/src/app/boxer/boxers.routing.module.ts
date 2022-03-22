import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../not-found/not-found.component";
import { BoxerInfoComponent } from "./boxer-info/boxer-info.component";
import { BoxersListComponents } from "./boxers-list/boxers-list.component";


const boxerRoutes: Routes = [
    { path: 'boxers', component: BoxersListComponents} , 
    // { path: 'boxers/add', component: BoxerInfoComponent},
    { path: 'boxers/:id', component: BoxerInfoComponent},
   // { path: '**', component: NotFoundComponent}
   /* { path: 'boxers', component: BoxerComponents, children:[
        { path: ':id', component: BoxerInfoComponent},
      ]} , */
];

@NgModule({
    imports:[
        RouterModule.forChild(boxerRoutes)
    ],

    exports: [
        RouterModule
    ]
})
export class BoxersRoutingModule { }