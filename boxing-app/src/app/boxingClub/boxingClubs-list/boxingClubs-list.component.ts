import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { IBoxingClub } from '../boxingClub.interface';
import { IUser } from '../user.interface';
import { BoxingClubService } from '../boxingClub.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

@Component({
  selector: 'app-boxingClubs-list',
  templateUrl: './boxingClubs-list.component.html',
  styleUrls: ['./boxingClubs-list.component.scss'],
})
export class BoxingClubsListComponents implements OnInit {
  public boxingClubs: IBoxingClub[] = [];

  token: string | null = null;
   user: IUser={
     role:""
     
   };
  constructor(
    private BoxingClubService: BoxingClubService,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  ngOnInit() {

    this.token = localStorage.getItem('auth_token');
    if(this.token!==null){
      if (this.jwtHelper.isTokenExpired(this.token)) {
        // token expired 
        console.log("токен истек")
        this.router.navigate(['/login']);
      } else {
    this.BoxingClubService.getBoxingClubs().subscribe((response) => {
      this.boxingClubs = response;
    });
    this.BoxingClubService.getUserByToken().subscribe((response) => {
      this.user = response;
    });
  }
}
  else{
    console.log("токена нет")
    this.router.navigate(['/login']);
  }
  }

  deleteBoxingClub(id: number) {
    this.BoxingClubService.deleteBoxingClub(id)
      .pipe(
        switchMap(() => {
          return this.BoxingClubService.getBoxingClubs();
        })
      )
      .subscribe((data) => {
        this.boxingClubs = data;
      });
  }
}
