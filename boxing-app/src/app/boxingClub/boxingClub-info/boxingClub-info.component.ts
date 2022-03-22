import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap, timeout } from 'rxjs';

import { IBoxingClub } from '../boxingClub.interface';
import { BoxingClubService } from '../boxingClub.service';

@Component({
  selector: 'app-boxingClub-info',
  templateUrl: './boxingClub-info.component.html',
  styleUrls: ['./boxingClub-info.component.scss'],
})
export class BoxingClubInfoComponent implements OnInit {
  boxingClub: IBoxingClub | null = null;
  id: number | null = null;
  form: FormGroup;
  private subscriptions$ = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private boxingClubService: BoxingClubService
  ) {
    this.form = this.fb.group({
      clubName: [null, Validators.required],
      clubAddress: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.id = id === 'add' ? null : +id;
    if (this.id) {
      this.subscriptions$.add(
        this.boxingClubService
          .getBoxingClubById(this.id)
          .subscribe((response) => {
            this.boxingClub = response;
            this.form.patchValue({ ...response });
          })
      );
    }
  }

  submit() {
    if (this.id) {
      this.subscriptions$.add(
        this.boxingClubService
          .editBoxingClub(this.id, this.form.value)
          .subscribe((response) => {
            this.boxingClub = response;
          })
      );
    } else {
      this.subscriptions$.add(
        this.boxingClubService.addBoxingClub(this.form.value).subscribe((response) => {
          this.boxingClub = response;
        })
      );
    }
  }
}
