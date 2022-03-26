import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IBoxer } from './competitions-boxers.interface';
import { ICompetitionBoxers } from './competitions-boxers-participant.interface';

@Injectable({
  providedIn: 'root',
})
export class CompetitionBoxersService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getBoxersNotParticipatingById(id: number): Observable<IBoxer[]> {
    return this.http.get<IBoxer[]>(
      `${this.baseUrl}/competitions/boxers/not/participating/${id}`
    );
  }
  addBoxerInCompetitions(
    payload: ICompetitionBoxers
  ): Observable<ICompetitionBoxers> {
    return this.http.post<ICompetitionBoxers>(
      `${this.baseUrl}/competitions/boxers`,
      payload
    );
  }


  getBoxersParticipatingById(id: number): Observable<IBoxer[]> {
    return this.http.get<IBoxer[]>(
      `${this.baseUrl}/competitions/boxers/${id}`
    );
  }
  deleteBoxerInCompetitions(payload: ICompetitionBoxers) {
    return this.http.delete<ICompetitionBoxers>(
      `${this.baseUrl}/competitions/boxers`,
      {params:{competitionsId: payload.competitionsId.toString(),boxerId: payload.boxerId.toString()}}
    );
  }

}
