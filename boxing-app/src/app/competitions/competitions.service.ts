import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICompetition } from './competitions.interface';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getCompetitions(): Observable<ICompetition[]> {
    return this.http.get<ICompetition[]>(`${this.baseUrl}/competitions`);
  }

  getCompetitionById(id: number): Observable<ICompetition> {
    return this.http.get<ICompetition>(`${this.baseUrl}/competitions/${id}`);
  }

  addCompetition(payload: ICompetition): Observable<ICompetition> {
    return this.http.post<ICompetition>(`${this.baseUrl}/competitions`, payload);
  }

  editCompetition(id: number, payload: ICompetition): Observable<ICompetition> {
    return this.http.put<ICompetition>(
      `${this.baseUrl}/competitions/${id}`,
      payload
    );
  }

  deleteCompetition(id: number): Observable<ICompetition> {
    return this.http.delete<ICompetition>(`${this.baseUrl}/competitions/${id}`);
    //.map((response: Response)=> response.json());
  }
}
