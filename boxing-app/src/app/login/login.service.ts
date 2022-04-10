import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ILogin } from './login.interface';
import { IBoxer } from './login.user.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  

  getBoxerByLogin(payload: ILogin): Observable<IBoxer> {
    return this.http.get<IBoxer>(`${this.baseUrl}/getuserbylogin`,
    {params:{login: payload.login.toString()}}
    );

  }


  
  
    login(payload: ILogin) {
    return this.http.post(`${this.baseUrl}/token`,
    payload
    );

  }
  
}
