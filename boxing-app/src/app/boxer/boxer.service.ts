import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IBoxer } from './boxer.interface';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class BoxerService {
  private baseUrl = '/api';
 

  constructor(private http: HttpClient) {
 
  }

 

  getBoxers(): Observable<IBoxer[]> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.get<IBoxer[]>(`${this.baseUrl}/boxers`,{headers: header}
    
    );
  }

  getBoxersById(id: number): Observable<IBoxer> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.get<IBoxer>(`${this.baseUrl}/boxers/${id}`,{headers: header});
  }

  addBoxer(payload: IBoxer): Observable<IBoxer> {

    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }

    return this.http.post<IBoxer>(`${this.baseUrl}/boxers`, payload,{headers: header});
  }

  editBoxer(id: number, payload: IBoxer): Observable<IBoxer> {

    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.put<IBoxer>(`${this.baseUrl}/boxers/${id}`, payload,{headers: header});
  }

  deleteBoxer(id: number): Observable<IBoxer> {
    let header;
    let token =  localStorage.getItem('auth_token');
   if(token!==null){
     console.log(token);
     header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`
    );
    }
    return this.http.delete<IBoxer>(`${this.baseUrl}/boxers/${id}`,{headers: header});
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
