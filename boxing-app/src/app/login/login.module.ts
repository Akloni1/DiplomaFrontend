import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from './login-page/login-page.component';
import { LoginService } from "./login.service";
import { LoginRoutingModule } from "./login.routing.module";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
   
    LoginComponent
 

  ],
  imports:[
    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SharedModule,
    MatButtonModule
],
  providers: [LoginService] 
})
export class LoginModule { }