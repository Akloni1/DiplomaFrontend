import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CoachInfoComponent } from './coach-info/coach-info.component';
import { CoachesListComponents } from './coaches-list/coaches-list.component';

const coachRoutes: Routes = [
  { path: 'coach', component: CoachesListComponents },
  // { path: 'boxers/add', component: BoxerInfoComponent},
  { path: 'coach/:id', component: CoachInfoComponent },
  //{ path: '**', component: NotFoundComponent },
  /* { path: 'boxers', component: BoxerComponents, children:[
        { path: ':id', component: BoxerInfoComponent},
      ]} , */
];

@NgModule({
  imports: [RouterModule.forChild(coachRoutes)],

  exports: [RouterModule],
})
export class CoachRoutingModule {}
