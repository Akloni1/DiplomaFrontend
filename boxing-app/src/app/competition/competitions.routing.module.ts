import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionsListComponents } from './competitions-list/competitions-list.component';
import { CompetitionBoxersListComponents } from './competitions-boxers-list/competitions-boxers-list.component';
import { CompetitionBoxingClubsListComponents } from './competitions-boxingClub-list/competitions-boxingClub-list.component';
import { ComparisonBoxersListComponents } from './competitions-comparison-boxers-list/competitions-comparison-boxers-list.component';


const competitionRoutes: Routes = [
  { path: 'competitions', component: CompetitionsListComponents },
  // { path: 'boxers/add', component: BoxerInfoComponent},
  { path: 'competitions/:id', component: CompetitionInfoComponent },
  {
    path: 'competitions/boxers/not/participating/:id',
    component: CompetitionBoxersListComponents,
  },
  {
    path: 'competitions/boxers/:id',
    component: CompetitionBoxersListComponents,
  },
  {
    path: 'competitions/boxingClub/not/participating/:id',
    component: CompetitionBoxingClubsListComponents,
  },
  { 
  path: 'competitions/boxingClub/:id',
  component: CompetitionBoxingClubsListComponents,
},
{
  path: 'competitions/boxers/comparison/:id',
  component: ComparisonBoxersListComponents,
},
//  { path: '**', component: NotFoundComponent },
  /* { path: 'boxers', component: BoxerComponents, children:[
        { path: ':id', component: BoxerInfoComponent},
      ]} , */
];

@NgModule({
  imports: [RouterModule.forChild(competitionRoutes)],

  exports: [RouterModule],
})
export class CompetitionRoutingModule {}
