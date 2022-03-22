import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IBoxingClub } from './boxingClub.interface';

@Injectable({
  providedIn: 'root',
})
export class BoxingClubService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getBoxingClubs(): Observable<IBoxingClub[]> {
    return this.http.get<IBoxingClub[]>(`${this.baseUrl}/boxingClubs`);
  }

  getBoxingClubById(id: number): Observable<IBoxingClub> {
    return this.http.get<IBoxingClub>(`${this.baseUrl}/boxingClubs/${id}`);
  }

  addBoxingClub(payload: IBoxingClub): Observable<IBoxingClub> {
    return this.http.post<IBoxingClub>(`${this.baseUrl}/boxingClubs`, payload);
  }

  editBoxingClub(id: number, payload: IBoxingClub): Observable<IBoxingClub> {
    return this.http.put<IBoxingClub>(
      `${this.baseUrl}/boxingClubs/${id}`,
      payload
    );
  }

  deleteBoxingClub(id: number): Observable<IBoxingClub> {
    return this.http.delete<IBoxingClub>(`${this.baseUrl}/boxingClubs/${id}`);
    //.map((response: Response)=> response.json());
  }
}
