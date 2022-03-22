import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IComparisonBoxers } from './comparison-boxers.interface';

@Injectable({
  providedIn: 'root',
})
export class ComparisonBoxersService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  

  getBoxersComparisonByIdCompetition(id: number): Observable<IComparisonBoxers> {
    return this.http.get<IComparisonBoxers>(`${this.baseUrl}/competitions/boxers/comparison/${id}`);
  }

  
}
