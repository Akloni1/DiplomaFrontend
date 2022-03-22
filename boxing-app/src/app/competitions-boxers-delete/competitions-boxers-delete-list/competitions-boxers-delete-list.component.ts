import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ICompetitionBoxersParticipant } from '../competitions-boxers-delete-participant.interface';
import { ICompetitionBoxers } from '../competitions-boxers-delete.interface';
import { CompetitionBoxersService } from '../competitions-boxers-delete.service';

@Component({
  selector: 'app-competition-boxers-delete',
  templateUrl: './competitions-boxers-delete-list.component.html',
  styleUrls: ['./competitions-boxers-delete-list.component.scss'],
})
export class CompetitionBoxersListComponents implements OnInit {
  public competitionBoxers: ICompetitionBoxers[] = [];
  id!: number;
  payload: ICompetitionBoxersParticipant = {
    competitionsId: 0,
    boxerId: 0,
  };

  private subscriptions$ = new Subscription();
  constructor(
    private CompetitionBoxersService: CompetitionBoxersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = id;
    this.CompetitionBoxersService.getBoxersParticipatingById(id).subscribe(
      (response) => {
        this.competitionBoxers = response;
      }
    );
  }

  deleteBoxerInCompetitions(id: number) {
    this.payload.competitionsId = this.id;
    this.payload.boxerId = id;
    this.subscriptions$.add(
      this.CompetitionBoxersService.deleteBoxerInCompetitions(this.payload)

        .pipe(
          switchMap(() => {
            return this.CompetitionBoxersService.getBoxersParticipatingById(
              this.id
            );
          })
        )
        .subscribe((data) => {
          this.competitionBoxers = data;
        })
    );
  }
}
