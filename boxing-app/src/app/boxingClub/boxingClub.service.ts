import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IBoxingClub } from './boxingClub.interface';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class BoxingClubService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getBoxingClubs(): Observable<IBoxingClub[]> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.get<IBoxingClub[]>(`${this.baseUrl}/boxingClubs`, {headers: header});
  }

  getBoxingClubById(id: number): Observable<IBoxingClub> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.get<IBoxingClub>(`${this.baseUrl}/boxingClubs/${id}`, {headers: header});
  }

  addBoxingClub(payload: IBoxingClub): Observable<IBoxingClub> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.post<IBoxingClub>(`${this.baseUrl}/boxingClubs`, payload, {headers: header});
  }

  editBoxingClub(id: number, payload: IBoxingClub): Observable<IBoxingClub> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.put<IBoxingClub>(
      `${this.baseUrl}/boxingClubs/${id}`,
      payload,
      {headers: header}
    );
  }

  deleteBoxingClub(id: number): Observable<IBoxingClub> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.delete<IBoxingClub>(`${this.baseUrl}/boxingClubs/${id}`, {headers: header});
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
