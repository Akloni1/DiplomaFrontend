import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap, timeout } from 'rxjs';

import { ICoach } from '../coach.interface';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-coach-info',
  templateUrl: './coach-info.component.html',
  styleUrls: ['./coach-info.component.scss'],
})
export class CoachInfoComponent implements OnInit {
  coach: ICoach | null = null;
  id: number | null = null;
  form: FormGroup;
  private subscriptions$ = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private coachService: CoachService
  ) {
    this.form = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    middleName: [null, Validators.required],
    sportsTitle: [null, Validators.required],
    boxingClubId: [null, Validators.required],
    login: [null, Validators.required],
    password: [null, Validators.required],
    role: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.id = id === 'add' ? null : +id;
    if (this.id) {
      this.subscriptions$.add(
        this.coachService
          .getCoachById(this.id)
          .subscribe((response) => {
            this.coach = response;
            this.form.patchValue({ ...response });
          })
      );
    }
  }

  submit() {
    if (this.id) {
      this.subscriptions$.add(
        this.coachService
          .editCoach(this.id, this.form.value)
          .subscribe((response) => {
            this.coach = response;
          })
      );
    } else {
      this.subscriptions$.add(
        this.coachService.addCoach(this.form.value).subscribe((response) => {
          this.coach = response;
        })
      );
    }
  }
}
