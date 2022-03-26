import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BackgroundDirectives } from './directives/background.directives';
import { PowPipe } from './boxer/pow.pipe';
import { BoxerFilterPipe } from './boxer/boxer-filter.pipe';
import { BoxerService } from './boxer/boxer.service';
import { FormComponent } from './form/form.component';

import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { BoxersListComponents } from './boxer/boxers-list/boxers-list.component';
import { BoxerInfoComponent } from './boxer/boxer-info/boxer-info.component';
import { BoxersModule } from './boxer/boxers.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { BoxingClubModule } from './boxingClub/boxingClub.module';
import { CoachModule } from './coach/coach.module';
import { CompetitionModule } from './competitions/competitions.module';
import { CompetitionBoxersModule } from './competitions-boxers/competitions-boxers.module';
import { ComparisonBoxersModule } from './comparison-boxers/comparison-boxers.module';
import { CompetitionBoxingClubsModule } from './competitions-boxingClub/competitions-boxingClub.module';


@NgModule({
  declarations: [
    AppComponent,
   
  //  BoxingClubComponents,
 //   BackgroundDirectives,
    PowPipe,
    BoxerFilterPipe,
    FormComponent,
    HomeComponent,
  
    NotFoundComponent,
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BoxersModule,
    BoxingClubModule,
    CoachModule,
    CompetitionModule,
    CompetitionBoxersModule,
   // CompetitionBoxersDeleteModule,
   

    CompetitionBoxingClubsModule,
    ComparisonBoxersModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
