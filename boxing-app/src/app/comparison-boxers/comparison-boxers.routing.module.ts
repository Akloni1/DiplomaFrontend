import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
//import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { ComparisonBoxersListComponents } from './comparison-boxers-list/comparison-boxers-list.component';

const comparisonBoxersRoutes: Routes = [
  
  {
    path: 'competitions/boxers/comparison/:id',
    component: ComparisonBoxersListComponents,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(comparisonBoxersRoutes)],

  exports: [RouterModule],
})
export class ComparisonBoxersRoutingModule {}
