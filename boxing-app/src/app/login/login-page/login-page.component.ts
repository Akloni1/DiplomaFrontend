import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap, timeout } from 'rxjs';

import { ILogin } from '../login.interface';
import { IBoxer } from '../login.user.interface';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginComponent {
  user: any;
  form: FormGroup;
  token: string | null = null;
  private subscriptions$ = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {
    this.form = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  submit() {
    
    this.subscriptions$.add(
      this.loginService.login(this.form.value).subscribe((response: any) => {
        this.token = response.access_token;
        console.log(response);

        if (response.access_token !== null) {
          if (this.jwtHelper.isTokenExpired(response.access_token)) {
            // token expired
            console.log('Не верный логин или пароль');
          } else {
            console.log('Вы авторизировались');
            this.router.navigate(['']);
          }
        } else {
          console.log('Не верный логин или пароль');
        }
        localStorage.setItem('auth_token', response.access_token);
      })
    );

   
   /* if (this.token !== null) {
      if (this.jwtHelper.isTokenExpired(this.token)) {
        // token expired
        console.log('Не верный логин или пароль');
      } else {
        console.log('Вы авторизировались');
        this.router.navigate(['']);
      }
    } else {
      console.log('Не верный логин или пароль');
    }*/
  }
}
