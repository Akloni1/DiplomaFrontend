import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ICompetitionBoxers } from '../competitions-boxers-participant.interface';
import { IBoxer } from '../competitions-boxers.interface';
import { CompetitionBoxersService } from '../competitions-boxers.service';

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
  pageDefinition = window.location.hash.split('/')[3] === 'not';

  private subscriptions$ = new Subscription();
  constructor(
    private CompetitionBoxersService: CompetitionBoxersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.pageDefinition) {
      console.log(window.location.hash.split('/')[3]);
      const id = this.route.snapshot.params['id'];
      this.id = id;
      this.CompetitionBoxersService.getBoxersNotParticipatingById(
        id
      ).subscribe((response) => {
        this.boxers = response;
      });
    } else {
      const id = this.route.snapshot.params['id'];
      this.id = id;
      this.CompetitionBoxersService.getBoxersParticipatingById(
        id
      ).subscribe((response) => {
        this.boxers = response;
      });
    }
  }

  addBoxerInCompetitions(id: number) {
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
          this.boxers = data;
        })
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
          this.boxers = data;
        })
    );
  }
}
