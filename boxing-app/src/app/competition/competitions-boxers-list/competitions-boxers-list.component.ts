import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ICompetitionBoxers } from '../competitions-boxers-participant.interface';
import { IBoxer } from '../competitions-boxers.interface';
import { IUser } from '../user.interface';
import { CompetitionService } from '../competitions.service';

@Component({
  selector: 'app-competition-boxers',
  templateUrl: './competitions-boxers-list.component.html',
  styleUrls: ['./competitions-boxers-list.component.scss'],
})
export class CompetitionBoxersListComponents implements OnInit {
  public boxers: IBoxer[] = [];
  id!: number;
  payload: ICompetitionBoxers = {
    competitionsId: 0,
    boxerId: 0,
  };
  payloadValid: ICompetitionBoxers = {
    competitionsId: 0,
    boxerId: 0,
  };
  token: string | null = null;
  user: IUser={
    boxerId: 0,
    boxingClubId:0,
    coachId: 0,
    role:""
    
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
      this.CompetitionService.getBoxersNotParticipatingById(id).subscribe(
        (response) => {
          this.boxers = response;
        }
      );
    } else {
      const id = this.route.snapshot.params['id'];
      this.id = id;
      this.CompetitionService.getBoxersParticipatingById(id).subscribe(
        (response) => {
          this.boxers = response;
        }
      );
    }
    this.CompetitionService.getUserByToken().subscribe((response) => {
      this.user = response;
    });
  }
  }

  addBoxerInCompetitions(id: number) {
    this.payload.competitionsId = this.id;
    this.payload.boxerId = id;
    this.subscriptions$.add(
      this.CompetitionService.addBoxerInCompetitions(this.payload)
        .pipe(
          switchMap(() => {
            return this.CompetitionService.getBoxersNotParticipatingById(
              this.id
            );
          })
        )
        .subscribe((data) => {
          this.boxers = data;
        })
    );
  }

  deleteBoxerInCompetitions(id: number) {
    this.payload.competitionsId = this.id;
    this.payload.boxerId = id;
    this.subscriptions$.add(
      this.CompetitionService.deleteBoxerInCompetitions(this.payload)

        .pipe(
          switchMap(() => {
            return this.CompetitionService.getBoxersParticipatingById(
              this.id
            );
          })
        )
        .subscribe((data) => {
          this.boxers = data;
        })
    );
  }

 
}
