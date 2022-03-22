import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { IBoxingClub } from '../boxingClub.interface';
import { BoxingClubService } from '../boxingClub.service';
@Component({
  selector: 'app-boxingClubs-list',
  templateUrl: './boxingClubs-list.component.html',
  styleUrls: ['./boxingClubs-list.component.scss'],
})
export class BoxingClubsListComponents implements OnInit {
  public boxingClubs: IBoxingClub[] = [];

  constructor(
    private BoxingClubService: BoxingClubService,
    private router: Router
  ) {}

  ngOnInit() {
    this.BoxingClubService.getBoxingClubs().subscribe((response) => {
      this.boxingClubs = response;
    });
  }

  deleteBoxingClub(id: number) {
    this.BoxingClubService.deleteBoxingClub(id)
      .pipe(
        switchMap(() => {
          return this.BoxingClubService.getBoxingClubs();
        })
      )
      .subscribe((data) => {
        this.boxingClubs = data;
      });
  }
}
