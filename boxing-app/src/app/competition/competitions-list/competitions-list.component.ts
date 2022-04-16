import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { ICompetition } from '../competitions.interface';
import { IUser } from '../user.interface';
import { CompetitionService } from '../competitions.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.component.html',
  styleUrls: ['./competitions-list.component.scss'],
})

export class CompetitionsListComponents implements OnInit {
  public competitions: ICompetition[] = [];
  token: string | null = null;
  user: IUser={
    boxerId: 0,
    boxingClubId:0,
    coachId: 0,
    role:""
    
  };

  constructor(
    private CompetitionService: CompetitionService,
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
    this.CompetitionService.getCompetitions().subscribe((response) => {
      this.competitions = response;
    });

    this.CompetitionService.getUserByToken().subscribe((response) => {
      this.user = response;
    });
  }
}
  else{
    console.log("токена нет")
    this.router.navigate(['/login']);
  }
  }

  deleteCompetition(id: number) {
    this.CompetitionService.deleteCompetition(id)
      .pipe(
        switchMap(() => {
          return this.CompetitionService.getCompetitions();
        })
      )
      .subscribe((data) => {
        this.competitions = data;
      });
  }
}
