import { Component, OnInit, DoCheck } from '@angular/core';
import { AppService } from './app.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,DoCheck {
  public coacher: any;
  token = localStorage.getItem('auth_token');
  vavidToken!: boolean;
  constructor(
    private appService: AppService,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.token !== null) {
      if (this.jwtHelper.isTokenExpired(this.token)) {
        // token expired
        console.log('токен истек');
        this.vavidToken = false;
        this.router.navigate(['/login']);
      } else {
        console.log('токен валидный');
        this.vavidToken = true;
      }
    } else {
      console.log('токена нет!');
      this.vavidToken = false;
      this.router.navigate(['/login']);
    }
  }

  ngDoCheck(): void {
    this.token = localStorage.getItem('auth_token');
    if (this.token !== null) {
      if (this.jwtHelper.isTokenExpired(this.token)) {
        this.vavidToken = false;
      } else {
        this.vavidToken = true;
      }
    } else {
      this.vavidToken = false;
    }
  }

  logout() {
    localStorage.removeItem('auth_token');
  }
}
