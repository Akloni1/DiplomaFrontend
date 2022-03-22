import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { ICoach } from '../coach.interface';
import { CoachService } from '../coach.service';
@Component({
  selector: 'app-coaches-list',
  templateUrl: './coaches-list.component.html',
  styleUrls: ['./coaches-list.component.scss'],
})

export class CoachesListComponents implements OnInit {
  public coaches: ICoach[] = [];

  constructor(
    private CoachService: CoachService,
    private router: Router
  ) {}

  ngOnInit() {
    this.CoachService.getCoaches().subscribe((response) => {
      this.coaches = response;
    });
  }

  deleteCoach(id: number) {
    this.CoachService.deleteCoach(id)
      .pipe(
        switchMap(() => {
          return this.CoachService.getCoaches();
        })
      )
      .subscribe((data) => {
        this.coaches = data;
      });
  }
}
