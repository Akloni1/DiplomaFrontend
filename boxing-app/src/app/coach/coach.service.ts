import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICoach } from './coach.interface';

@Injectable({
  providedIn: 'root',
})
export class CoachService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getCoaches(): Observable<ICoach[]> {
    return this.http.get<ICoach[]>(`${this.baseUrl}/coach`);
  }

  getCoachById(id: number): Observable<ICoach> {
    return this.http.get<ICoach>(`${this.baseUrl}/coach/${id}`);
  }

  addCoach(payload: ICoach): Observable<ICoach> {
    return this.http.post<ICoach>(`${this.baseUrl}/coach`, payload);
  }

  editCoach(id: number, payload: ICoach): Observable<ICoach> {
    return this.http.put<ICoach>(
      `${this.baseUrl}/coach/${id}`,
      payload
    );
  }

  deleteCoach(id: number): Observable<ICoach> {
    return this.http.delete<ICoach>(`${this.baseUrl}/coach/${id}`);
    //.map((response: Response)=> response.json());
  }
}
