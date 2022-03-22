import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoxingClubInfoComponent } from './boxingClub-info/boxingClub-info.component';
import { BoxingClubsListComponents } from './boxingClubs-list/boxingClubs-list.component';
import { BoxingClubService } from './boxingClub.service';
import { BoxingClubRoutingModule } from './boxingClub.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BoxingClubInfoComponent,
    BoxingClubsListComponents,
    //BackgroundDirectives,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BoxingClubRoutingModule,
    SharedModule,
  ],
  providers: [BoxingClubService],
})
export class BoxingClubModule {}
