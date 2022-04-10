import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { IBoxer } from '../comparison-boxers-boxer.interface';
import { IBoxersCouple } from '../comparison-boxers-couple.interface';
import { IComparisonBoxers } from '../comparison-boxers.interface';
import { CompetitionService } from '../competitions.service';

@Component({
  selector: 'app-comparison-boxers',
  templateUrl: './competitions-comparison-boxers-list.component.html',
  styleUrls: ['./competitions-comparison-boxers-list.component.scss'],
})
export class ComparisonBoxersListComponents implements OnInit {
   public comparisonBoxers: IComparisonBoxers| null = null;
 // public comparisonBoxers: any;
    
  
  id!: number;
  

  private subscriptions$ = new Subscription();
  constructor(
    private CompetitionService: CompetitionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = id;
    this.CompetitionService.getBoxersComparisonByIdCompetition(id).subscribe(
      (response) => {
        this.comparisonBoxers = response;
        console.log(this.comparisonBoxers);
      }
    );
  }

  
}
