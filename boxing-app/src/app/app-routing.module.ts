import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BoxerInfoComponent } from './boxer/boxer-info/boxer-info.component';
import { BoxersListComponents } from './boxer/boxers-list/boxers-list.component';


import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
