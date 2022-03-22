import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionsListComponents } from './competitions-list/competitions-list.component';

const competitionRoutes: Routes = [
  { path: 'competitions', component: CompetitionsListComponents },
  // { path: 'boxers/add', component: BoxerInfoComponent},
  { path: 'competitions/:id', component: CompetitionInfoComponent },
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
