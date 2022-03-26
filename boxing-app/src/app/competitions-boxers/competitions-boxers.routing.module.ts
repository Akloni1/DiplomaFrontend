import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
//import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionBoxersListComponents } from './competitions-boxers-list/competitions-boxers-list.component';

const competitionBoxersRoutes: Routes = [
  //  { path: 'competitions', component: CompetitionsListComponents },
  // { path: 'boxers/add', component: BoxerInfoComponent},
  {
    path: 'competitions/boxers/not/participating/:id',
    component: CompetitionBoxersListComponents,
  },
  {
    path: 'competitions/boxers/:id',
    component: CompetitionBoxersListComponents,
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
export class CompetitionBoxersRoutingModule {}
