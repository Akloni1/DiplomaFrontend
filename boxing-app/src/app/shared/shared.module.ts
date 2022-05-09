import { NgModule } from "@angular/core";
import { BackgroundDirectives } from "../directives/background.directives";
//import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        BackgroundDirectives
    ],
  /*  imports: [
        MatButtonModule
       
      ],*/
    exports: [
        BackgroundDirectives
    ]
})
export class SharedModule {

}