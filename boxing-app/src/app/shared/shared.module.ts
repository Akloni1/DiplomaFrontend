import { NgModule } from "@angular/core";
import { BackgroundDirectives } from "../directives/background.directives";

@NgModule({
    declarations: [
        BackgroundDirectives
    ],
    exports: [
        BackgroundDirectives
    ]
})
export class SharedModule {

}