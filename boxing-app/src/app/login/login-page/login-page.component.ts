import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap, timeout } from 'rxjs';

import { ILogin } from '../login.interface';
import { IBoxer } from '../login.user.interface';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginComponent  {
  user: any;
  form: FormGroup;
  private subscriptions$ = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.form = this.fb.group({
    login: [null, Validators.required],
    password: [null, Validators.required],
    });
  }

  

  submit() {
   
      this.subscriptions$.add(
        this.loginService
          .getBoxerByLogin(this.form.value)
          .subscribe((response) => {
            this.user = response;
          })
      );

if(this.user===null){
  console.log("неверный логин")
}
else{
  console.log("верный логин")
  this.subscriptions$.add(
    this.loginService
      .login(this.form.value)
      .subscribe((response: any) => {
        console.log(response);
       localStorage.setItem('auth_token',response.access_token)
      })
  );
}
   
  }
}
