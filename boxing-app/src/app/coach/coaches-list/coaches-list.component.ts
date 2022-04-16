import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { ICoach } from '../coach.interface';
import { IUser } from '../user.interface';
import { CoachService } from '../coach.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

@Component({
  selector: 'app-coaches-list',
  templateUrl: './coaches-list.component.html',
  styleUrls: ['./coaches-list.component.scss'],
})

export class CoachesListComponents implements OnInit {
  public coaches: ICoach[] = [];
  token: string | null = null;
  user: IUser={
    boxingClubId:0,
    coachId: 0,
    role:""
    
  };

  constructor(
    private CoachService: CoachService,
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
    this.CoachService.getCoaches().subscribe((response) => {
      this.coaches = response;
    });
    this.CoachService.getUserByToken().subscribe((response) => {
      this.user = response;
    });
  }
}
  else{
    console.log("токена нет")
    this.router.navigate(['/login']);
  }
  
  }

  deleteCoach(id: number) {
    this.CoachService.deleteCoach(id)
      .pipe(
        switchMap(() => {
          return this.CoachService.getCoaches();
        })
      )
      .subscribe((data) => {
        this.coaches = data;
      });
  }
}
