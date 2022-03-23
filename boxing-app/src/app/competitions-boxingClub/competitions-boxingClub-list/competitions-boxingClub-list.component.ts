import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ICompetitionBoxingClub } from '../competitions-boxingClub-participant.interface';
import { IBoxingClub } from '../competitions-boxingClub.interface';
import { CompetitionClubsService } from '../competitions-boxingClub.service';

@Component({
  selector: 'app-competition-boxingClub',
  templateUrl: './competitions-boxingClub-list.component.html',
  styleUrls: ['./competitions-boxingClub-list.component.scss'],
})
export class CompetitionBoxingClubsListComponents implements OnInit {
  public boxingClubs: IBoxingClub[] = [];
  id!: number;
  payload: ICompetitionBoxingClub = {
    competitionsId: 0,
    boxingClubId: 0,
  };
  pageDefinition = window.location.hash.split('/')[3] === 'not';

  private subscriptions$ = new Subscription();
  constructor(
    private CompetitionClubsService: CompetitionClubsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.pageDefinition) {
      console.log(window.location.hash.split('/')[3]);
      const id = this.route.snapshot.params['id'];
      this.id = id;
      this.CompetitionClubsService.getBoxingClubNotParticipatingById(
        id
      ).subscribe((response) => {
        this.boxingClubs = response;
      });
    } else {
      const id = this.route.snapshot.params['id'];
      this.id = id;
      this.CompetitionClubsService.getBoxingClubsParticipatingById(
        id
      ).subscribe((response) => {
        this.boxingClubs = response;
      });
    }
  }

  addBoxingClubInCompetitions(id: number) {
    this.payload.competitionsId = this.id;
    this.payload.boxingClubId = id;
    this.subscriptions$.add(
      this.CompetitionClubsService.addBoxingClubInCompetitions(this.payload)
        .pipe(
          switchMap(() => {
            return this.CompetitionClubsService.getBoxingClubNotParticipatingById(
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
      this.CompetitionClubsService.deleteBoxingClubInCompetitions(this.payload)

        .pipe(
          switchMap(() => {
            return this.CompetitionClubsService.getBoxingClubsParticipatingById(
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
