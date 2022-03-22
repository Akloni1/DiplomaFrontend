import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { ICompetition } from '../competitions.interface';
import { CompetitionService } from '../competitions.service';
@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.component.html',
  styleUrls: ['./competitions-list.component.scss'],
})

export class CompetitionsListComponents implements OnInit {
  public competitions: ICompetition[] = [];

  constructor(
    private CompetitionService: CompetitionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.CompetitionService.getCompetitions().subscribe((response) => {
      this.competitions = response;
    });
  }

  deleteCompetition(id: number) {
    this.CompetitionService.deleteCompetition(id)
      .pipe(
        switchMap(() => {
          return this.CompetitionService.getCompetitions();
        })
      )
      .subscribe((data) => {
        this.competitions = data;
      });
  }
}
