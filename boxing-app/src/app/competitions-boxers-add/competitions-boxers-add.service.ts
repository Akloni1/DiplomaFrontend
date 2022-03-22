import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICompetitionBoxers } from './competitions-boxers-add.interface';
import { ICompetitionBoxersParticipant } from './competitions-boxers-add-participant.interface';

@Injectable({
  providedIn: 'root',
})
export class CompetitionBoxersService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getBoxersNotParticipatingById(id: number): Observable<ICompetitionBoxers[]> {
    return this.http.get<ICompetitionBoxers[]>(
      `${this.baseUrl}/competitions/boxers/not/participating/${id}`
    );
  }
  addBoxerInCompetitions(
    payload: ICompetitionBoxersParticipant
  ): Observable<ICompetitionBoxersParticipant> {
    return this.http.post<ICompetitionBoxersParticipant>(
      `${this.baseUrl}/competitions/boxers`,
      payload
    );
  }
}
