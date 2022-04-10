import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { ICompetition } from '../competitions.interface';
import { IUser } from '../user.interface';
import { CompetitionService } from '../competitions.service';
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
    private router: Router
  ) {}

  ngOnInit() {
    this.token = localStorage.getItem('auth_token');
    if(this.token!==null){
    this.CompetitionService.getCompetitions().subscribe((response) => {
      this.competitions = response;
    });

    this.CompetitionService.getUserByToken().subscribe((response) => {
      this.user = response;
    });
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
