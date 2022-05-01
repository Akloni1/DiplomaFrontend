import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICompetition } from './competitions.interface';
import { IBoxingClub } from './competitions-boxingClub.interface';
import { ICompetitionBoxingClub } from './competitions-boxingClub-participant.interface';
import { IBoxer } from './competitions-boxers.interface';
import { IUser } from './user.interface';
import { ICompetitionBoxers } from './competitions-boxers-participant.interface';
import { IComparisonBoxers } from './comparison-boxers.interface';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getCompetitions(): Observable<ICompetition[]> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.get<ICompetition[]>(`${this.baseUrl}/competitions`,{headers: header});
  }

  getCompetitionById(id: number): Observable<ICompetition> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.get<ICompetition>(`${this.baseUrl}/competitions/${id}`,{headers: header});
  }

  addCompetition(payload: ICompetition): Observable<ICompetition> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.post<ICompetition>(`${this.baseUrl}/competitions`, payload,{headers: header});
  }

  editCompetition(id: number, payload: ICompetition): Observable<ICompetition> {
   
    if(<string><unknown>payload.isStarted=="true"){
      payload.isStarted= true;
    }
    else{
      payload.isStarted= false;
    }
   
   
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.put<ICompetition>(
      `${this.baseUrl}/competitions/${id}`,
      payload,
      {headers: header}
    );
  }

  deleteCompetition(id: number): Observable<ICompetition> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.delete<ICompetition>(`${this.baseUrl}/competitions/${id}`,{headers: header});
    //.map((response: Response)=> response.json());
  }



///////////////////




getBoxingClubNotParticipatingById(id: number): Observable<IBoxingClub[]> {
  let header;
  let token =  localStorage.getItem('auth_token');
 if(token!==null){
   console.log(token);
   header = new HttpHeaders().set(
    "Authorization",
    `Bearer ${token}`
  );
  }
  return this.http.get<IBoxingClub[]>(
    `${this.baseUrl}/competitions/boxingClub/not/participating/${id}`,{headers: header}
  );
}
addBoxingClubInCompetitions(
  payload: ICompetitionBoxingClub
): Observable<ICompetitionBoxingClub> {
  let header;
  let token =  localStorage.getItem('auth_token');
 if(token!==null){
   console.log(token);
   header = new HttpHeaders().set(
    "Authorization",
    `Bearer ${token}`
  );
  }
  return this.http.post<ICompetitionBoxingClub>(
    `${this.baseUrl}/competitions/clubs`,
    payload,
    {headers: header}
  );
}


getBoxingClubsParticipatingById(id: number): Observable<IBoxingClub[]> {
  let header;
  let token =  localStorage.getItem('auth_token');
 if(token!==null){
   console.log(token);
   header = new HttpHeaders().set(
    "Authorization",
    `Bearer ${token}`
  );
  }
  return this.http.get<IBoxingClub[]>(
    `${this.baseUrl}/competitions/clubs/${id}`,{headers: header}
  );
}

deleteBoxingClubInCompetitions(payload: ICompetitionBoxingClub) {
  let header;
  let token =  localStorage.getItem('auth_token');
 if(token!==null){
   console.log(token);
   header = new HttpHeaders().set(
    "Authorization",
    `Bearer ${token}`
  );
  }
  return this.http.delete<ICompetitionBoxingClub>(
    `${this.baseUrl}/competitions/clubs`,
    {params:{competitionsId: payload.competitionsId.toString(), boxingClubId: payload.boxingClubId.toString()},
    headers: header}
    
  );
}


////////////////////////////////

getBoxersNotParticipatingById(id: number): Observable<IBoxer[]> {
  let header;
  let token =  localStorage.getItem('auth_token');
 if(token!==null){
   console.log(token);
   header = new HttpHeaders().set(
    "Authorization",
    `Bearer ${token}`
  );
  }
  return this.http.get<IBoxer[]>(
    `${this.baseUrl}/competitions/boxers/not/participating/${id}`,{headers: header}
  );
}
addBoxerInCompetitions(
  payload: ICompetitionBoxers
): Observable<ICompetitionBoxers> {
  let header;
  let token =  localStorage.getItem('auth_token');
 if(token!==null){
   console.log(token);
   header = new HttpHeaders().set(
    "Authorization",
    `Bearer ${token}`
  );
  }
  return this.http.post<ICompetitionBoxers>(
    `${this.baseUrl}/competitions/boxers`,
    payload,{headers: header}
  );
}

getBoxersParticipatingById(id: number): Observable<IBoxer[]> {
  let header;
  let token =  localStorage.getItem('auth_token');
 if(token!==null){
   console.log(token);
   header = new HttpHeaders().set(
    "Authorization",
    `Bearer ${token}`
  );
  }
  return this.http.get<IBoxer[]>(`${this.baseUrl}/competitions/boxers/${id}`,{headers: header});
}
deleteBoxerInCompetitions(payload: ICompetitionBoxers) {
  let header;
  let token =  localStorage.getItem('auth_token');
 if(token!==null){
   console.log(token);
   header = new HttpHeaders().set(
    "Authorization",
    `Bearer ${token}`
  );
  }
  return this.http.delete<ICompetitionBoxers>(
    `${this.baseUrl}/competitions/boxers`,
    {
      params: {
        competitionsId: payload.competitionsId.toString(),
        boxerId: payload.boxerId.toString(),
      },
      headers: header
    }
  );
}

getValidationBoxerByClub(payload: ICompetitionBoxers): Observable<boolean> {
  let header;
  let token =  localStorage.getItem('auth_token');
 if(token!==null){
   console.log(token);
   header = new HttpHeaders().set(
    "Authorization",
    `Bearer ${token}`
  );
  }
  return this.http.get<boolean>(
    `${this.baseUrl}/competitions/boxers/not/participating`,
    {
      params: {
        competitionsId: payload.competitionsId.toString(),
        boxerId: payload.boxerId.toString(),
      },
      headers: header
    }
  );
}


///////////////////////////


getBoxersComparisonByIdCompetition(id: number): Observable<IComparisonBoxers> {
  let header;
  let token =  localStorage.getItem('auth_token');
 if(token!==null){
   console.log(token);
   header = new HttpHeaders().set(
    "Authorization",
    `Bearer ${token}`
  );
  }
  return this.http.get<IComparisonBoxers>(`${this.baseUrl}/competitions/boxers/comparison/${id}`,{headers: header});
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
