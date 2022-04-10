import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICoach } from './coach.interface';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class CoachService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getCoaches(): Observable<ICoach[]> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.get<ICoach[]>(`${this.baseUrl}/coach`,{headers: header});
  }

  getCoachById(id: number): Observable<ICoach> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.get<ICoach>(`${this.baseUrl}/coach/${id}`,{headers: header});
  }

  addCoach(payload: ICoach): Observable<ICoach> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.post<ICoach>(`${this.baseUrl}/coach`, payload,{headers: header});
  }

  editCoach(id: number, payload: ICoach): Observable<ICoach> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.put<ICoach>(
      `${this.baseUrl}/coach/${id}`,
      payload,
      {headers: header}
    );
  }

  deleteCoach(id: number): Observable<ICoach> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.delete<ICoach>(`${this.baseUrl}/coach/${id}`,{headers: header});
    //.map((response: Response)=> response.json());
  }


  getUserByToken(): Observable<IUser>  {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.get<IUser>(`${this.baseUrl}/getuser`,{headers: header}
   
    );

  }
}
