import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
//import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionBoxingClubsListComponents } from './competitions-boxingClub-list/competitions-boxingClub-list.component';

const competitionBoxersRoutes: Routes = [
  //  { path: 'competitions', component: CompetitionsListComponents },
  // { path: 'boxers/add', component: BoxerInfoComponent},
  {
    path: 'competitions/boxingClub/not/participating/:id',
    component: CompetitionBoxingClubsListComponents,
  },
  { 
  path: 'competitions/boxingClub/:id',
  component: CompetitionBoxingClubsListComponents,
},
  //  { path: '**', component: NotFoundComponent },
  /* { path: 'boxers', component: BoxerComponents, children:[
        { path: ':id', component: BoxerInfoComponent},
      ]} , */
];

@NgModule({
  imports: [RouterModule.forChild(competitionBoxersRoutes)],

  exports: [RouterModule],
})
export class CompetitionBoxingClubsRoutingModule {}
