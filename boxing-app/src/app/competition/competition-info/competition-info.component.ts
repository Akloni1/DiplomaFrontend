import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap, timeout } from 'rxjs';

import { ICompetition } from '../competitions.interface';
import { CompetitionService } from '../competitions.service';

@Component({
  selector: 'app-competition-info',
  templateUrl: './competition-info.component.html',
  styleUrls: ['./competition-info.component.scss'],
})
export class CompetitionInfoComponent implements OnInit {
  competition: ICompetition | null = null;
  id: number | null = null;
  form: FormGroup;
  private subscriptions$ = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private competitionService: CompetitionService
  ) {
    this.form = this.fb.group({
    competitionsName: [null, Validators.required],
    competitionsAddress: [null, Validators.required],
    startTime: [null, Validators.required],
    isStarted: Boolean,
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.id = id === 'add' ? null : +id;
    if (this.id) {
      this.subscriptions$.add(
        this.competitionService
          .getCompetitionById(this.id)
          .subscribe((response) => {
            this.competition = response;
            this.form.patchValue({ ...response });
          })
      );
    }
  }

  submit() {
    if (this.id) {
      this.subscriptions$.add(
        this.competitionService
          .editCompetition(this.id, this.form.value)
          .subscribe((response) => {
            this.competition = response;
          })
      );
    } else {
      this.subscriptions$.add(
        this.competitionService.addCompetition(this.form.value).subscribe((response) => {
          this.competition = response;
        })
      );
    }
  }
}
