import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { AppComponent } from "../app.component";
import { BackgroundDirectives } from "../directives/background.directives";
import { FormComponent } from "../form/form.component";
import { HomeComponent } from "../home/home.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { BoxerFilterPipe } from "./boxer-filter.pipe";

import { BoxerInfoComponent } from "./boxer-info/boxer-info.component";
import { BoxersListComponents } from "./boxers-list/boxers-list.component";
import { BoxerService } from "./boxer.service";
import { BoxersRoutingModule } from "./boxers.routing.module";
import { PowPipe } from "./pow.pipe";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    BoxerInfoComponent,
    BoxersListComponents ,
    //BackgroundDirectives,
    
 

  ],
  imports:[
    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BoxersRoutingModule,
    SharedModule
],
  providers: [BoxerService] 
})
export class BoxersModule { }