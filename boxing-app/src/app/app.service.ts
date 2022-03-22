import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = '/api';

  constructor(
    private http: HttpClient,
  ) { }

  getCoaches(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/coach`);
    
  }

}
