import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap, timeout } from 'rxjs';

import { IBoxer } from '../boxer.interface';
import { BoxerService } from '../boxer.service';

@Component({
  selector: 'app-boxer-info',
  templateUrl: './boxer-info.component.html',
  styleUrls: ['./boxer-info.component.scss'],
})
export class BoxerInfoComponent implements OnInit {
  boxer: IBoxer | null = null;
  id: number | null = null;
  form: FormGroup;
  private subscriptions$ = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private boxersService: BoxerService
  ) {
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      middleName: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      weight: [null, Validators.required],
      trainingExperience: [null, Validators.required],
      numberOfFightsHeld: [null, Validators.required],
      numberOfWins: [null, Validators.required],
      discharge: [null, Validators.required],
      coachId: [null, Validators.required],
      boxingClubId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.id = id === 'add' ? null : +id;
    if (this.id) {
      this.subscriptions$.add(
        this.boxersService.getBoxersById(this.id).subscribe((response) => {
          this.boxer = response;
          this.form.patchValue({ ...response });
        })
      );
    }
  }

  submit() {
    if (this.id) {
      this.subscriptions$.add(
        this.boxersService
          .editBoxer(this.id, this.form.value)
          .subscribe((response) => {
            this.boxer = response;
          })
      );
    } else {
      this.subscriptions$.add(
        this.boxersService.addBoxer(this.form.value).subscribe((response) => {
          this.boxer = response;
        })
      );
    }
  }
}
