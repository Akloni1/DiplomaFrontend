import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ICompetitionBoxersParticipant } from '../competitions-boxers-add-participant.interface';
import { ICompetitionBoxers } from '../competitions-boxers-add.interface';
import { CompetitionBoxersService } from '../competitions-boxers-add.service';

@Component({
  selector: 'app-competition-boxers-add',
  templateUrl: './competitions-boxers-add-list.component.html',
  styleUrls: ['./competitions-boxers-add-list.component.scss'],
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
    this.CompetitionBoxersService.getBoxersNotParticipatingById(id).subscribe(
      (response) => {
        this.competitionBoxers = response;
      }
    );
  }

  addBoxerInCompetitions(id: number) {
    console.log(this.id);
    this.payload.competitionsId = this.id;
    this.payload.boxerId = id;
    this.subscriptions$.add(
      this.CompetitionBoxersService.addBoxerInCompetitions(this.payload)
        .pipe(
          switchMap(() => {
            return this.CompetitionBoxersService.getBoxersNotParticipatingById(
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
