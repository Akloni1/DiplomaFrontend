import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICompetitionBoxers } from './competitions-boxers-delete.interface';
import { ICompetitionBoxersParticipant } from './competitions-boxers-delete-participant.interface';

@Injectable({
  providedIn: 'root',
})
export class CompetitionBoxersService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getBoxersParticipatingById(id: number): Observable<ICompetitionBoxers[]> {
    return this.http.get<ICompetitionBoxers[]>(
      `${this.baseUrl}/competitions/boxers/${id}`
    );
  }
  deleteBoxerInCompetitions(payload: ICompetitionBoxersParticipant) {
    return this.http.delete<ICompetitionBoxersParticipant>(
      `${this.baseUrl}/competitions/boxers`,
      {params:{competitionsId: payload.competitionsId.toString(),boxerId: payload.boxerId.toString()}}
    );
  }
}
