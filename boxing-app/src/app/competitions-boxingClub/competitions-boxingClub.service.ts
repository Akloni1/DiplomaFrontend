import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IBoxingClub } from './competitions-boxingClub.interface';
import { ICompetitionBoxingClub } from './competitions-boxingClub-participant.interface';

@Injectable({
  providedIn: 'root',
})
export class CompetitionClubsService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getBoxingClubNotParticipatingById(id: number): Observable<IBoxingClub[]> {
    return this.http.get<IBoxingClub[]>(
      `${this.baseUrl}/competitions/boxingClub/not/participating/${id}`
    );
  }
  addBoxingClubInCompetitions(
    payload: ICompetitionBoxingClub
  ): Observable<ICompetitionBoxingClub> {
    return this.http.post<ICompetitionBoxingClub>(
      `${this.baseUrl}/competitions/clubs`,
      payload
    );
  }


  getBoxingClubsParticipatingById(id: number): Observable<IBoxingClub[]> {
    return this.http.get<IBoxingClub[]>(
      `${this.baseUrl}/competitions/clubs/${id}`
    );
  }

  deleteBoxingClubInCompetitions(payload: ICompetitionBoxingClub) {
    console.log(payload.competitionsId.toString())
    console.log(payload.boxingClubId.toString())
    return this.http.delete<ICompetitionBoxingClub>(
      `${this.baseUrl}/competitions/clubs`,
      {params:{competitionsId: payload.competitionsId.toString(), boxingClubId: payload.boxingClubId.toString()}}
      
    );
    
  }
}
