import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IBoxer } from '../boxer.interface';
import { BoxerService } from '../boxer.service';

@Component({
  selector: 'app-boxer',
  templateUrl: './boxers-list.component.html',
  styleUrls: ['./boxers-list.component.scss'],
})
export class BoxersListComponents implements OnInit {
  public boxers: IBoxer[] = [];

  constructor(private BoxerService: BoxerService, private router: Router) {}

  ngOnInit() {
    this.BoxerService.getBoxers().subscribe((response) => {
      this.boxers = response;
    });
  }

  deleteBoxer(id: number) {
    this.BoxerService.deleteBoxer(id)
      .pipe(
        switchMap(() => {
          return this.BoxerService.getBoxers();
        })
      )
      .subscribe((data) => {
        this.boxers = data;
      });
  }
}
