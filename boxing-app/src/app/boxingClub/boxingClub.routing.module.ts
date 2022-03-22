import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { BoxingClubInfoComponent } from './boxingClub-info/boxingClub-info.component';
import { BoxingClubsListComponents } from './boxingClubs-list/boxingClubs-list.component';

const boxingClubRoutes: Routes = [
  { path: 'boxingClubs', component: BoxingClubsListComponents },
  // { path: 'boxers/add', component: BoxerInfoComponent},
  { path: 'boxingClubs/:id', component: BoxingClubInfoComponent },
//  { path: '**', component: NotFoundComponent },
  /* { path: 'boxers', component: BoxerComponents, children:[
        { path: ':id', component: BoxerInfoComponent},
      ]} , */
];

@NgModule({
  imports: [RouterModule.forChild(boxingClubRoutes)],

  exports: [RouterModule],
})
export class BoxingClubRoutingModule {}
