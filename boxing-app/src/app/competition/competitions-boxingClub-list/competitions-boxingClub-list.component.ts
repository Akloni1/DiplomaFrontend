import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ICompetitionBoxingClub } from '../competitions-boxingClub-participant.interface';
import { IBoxingClub } from '../competitions-boxingClub.interface';
import { IUser } from '../user.interface';
import { CompetitionService } from '../competitions.service';

@Component({
  selector: 'app-competition-boxingClub',
  templateUrl: './competitions-boxingClub-list.component.html',
  styleUrls: ['./competitions-boxingClub-list.component.scss'],
})
export class CompetitionBoxingClubsListComponents implements OnInit {
  public boxingClubs: IBoxingClub[] = [];
  id!: number;
  token: string | null = null;
  user: IUser={
    boxerId: 0,
    boxingClubId:0,
    coachId: 0,
    role:""
    
  };
  payload: ICompetitionBoxingClub = {
    competitionsId: 0,
    boxingClubId: 0,
  };
  pageDefinition = window.location.hash.split('/')[3] === 'not';

  private subscriptions$ = new Subscription();
  constructor(
    private CompetitionService: CompetitionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.token = localStorage.getItem('auth_token');
    if(this.token!==null){
    if (this.pageDefinition) {
      console.log(window.location.hash.split('/')[3]);
      const id = this.route.snapshot.params['id'];
      this.id = id;
      this.CompetitionService.getBoxingClubNotParticipatingById(
        id
      ).subscribe((response) => {
        this.boxingClubs = response;
      });
    } else {
      const id = this.route.snapshot.params['id'];
      this.id = id;
      this.CompetitionService.getBoxingClubsParticipatingById(
        id
      ).subscribe((response) => {
        this.boxingClubs = response;
      });
    }

    this.CompetitionService.getUserByToken().subscribe((response) => {
      this.user = response;
    });
  }
  }

  addBoxingClubInCompetitions(id: number) {
    this.payload.competitionsId = this.id;
    this.payload.boxingClubId = id;
    this.subscriptions$.add(
      this.CompetitionService.addBoxingClubInCompetitions(this.payload)
        .pipe(
          switchMap(() => {
            return this.CompetitionService.getBoxingClubNotParticipatingById(
              this.id
            );
          })
        )
        .subscribe((data) => {
          this.boxingClubs = data;
        })
    );
  }

  deleteBoxingClubInCompetitions(id: number) {
    this.payload.competitionsId = this.id;
    this.payload.boxingClubId = id;
    this.subscriptions$.add(
      this.CompetitionService.deleteBoxingClubInCompetitions(this.payload)

        .pipe(
          switchMap(() => {
            return this.CompetitionService.getBoxingClubsParticipatingById(
              this.id
            );
          })
        )
        .subscribe((data) => {
          this.boxingClubs = data;
        })
    );
  }
}
