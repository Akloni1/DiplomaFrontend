import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public coacher : any;
  token= localStorage.getItem('auth_token')
  constructor(
    private appService: AppService, 
    private jwtHelper: JwtHelperService,
    private router: Router
    ) {

  }
  ngOnInit() {
    if(this.token!==null){
            if (this.jwtHelper.isTokenExpired(this.token)) {
              // token expired 
              console.log("токен истек")
              this.router.navigate(['/login']);
            } else {
              console.log("токен валидный")
            }
    }
  else{
    console.log("токена нет")
    this.router.navigate(['/login']);
  }
  }


logout(){
  localStorage.removeItem('auth_token');
}
 
}
