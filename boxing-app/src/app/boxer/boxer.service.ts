import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IBoxer } from './boxer.interface';

@Injectable({
  providedIn: 'root',
})
export class BoxerService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getBoxers(): Observable<IBoxer[]> {
    return this.http.get<IBoxer[]>(`${this.baseUrl}/boxers`);
  }

  getBoxersById(id: number): Observable<IBoxer> {
    return this.http.get<IBoxer>(`${this.baseUrl}/boxers/${id}`);
  }

  addBoxer(payload: IBoxer): Observable<IBoxer> {
    return this.http.post<IBoxer>(`${this.baseUrl}/boxers`, payload);
  }

  editBoxer(id: number, payload: IBoxer): Observable<IBoxer> {
    return this.http.put<IBoxer>(`${this.baseUrl}/boxers/${id}`, payload);
  }

  deleteBoxer(id: number): Observable<IBoxer> {
    return this.http.delete<IBoxer>(`${this.baseUrl}/boxers/${id}`);
    //.map((response: Response)=> response.json());
  }
}
