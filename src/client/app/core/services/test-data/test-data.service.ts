import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITestUser } from 'src/client/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  //

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(userId?: string): Observable<ITestUser[] | ITestUser> {
    return this.http.get<ITestUser>(`${this.apiUrl}/users/${userId || ''}`);
  }
}
