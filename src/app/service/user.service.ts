import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.baseURl;
  http: any;

  constructor() {}
  register(  email: string, password: string ): Observable<any> {
    return this.http.post(`${this.apiUrl}auth/register`, email,password);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}auth/login`, credentials);
  }
 
}
