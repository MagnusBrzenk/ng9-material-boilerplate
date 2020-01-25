import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { apiDefaultTimeoutMs } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  //

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(userId?: string): Observable<IUser[] | IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/users/${userId}`);

    // if (!!userId) {
    //   return this.http.get<IUser>(`${this.apiUrl}/users/${userId}`);
    // } else {
    //   return this.http.get<IUser[]>(`${this.apiUrl}/users`, {
    //     headers: new HttpHeaders({ timeout: `${apiDefaultTimeoutMs}` })
    //   });
    // }
  }
}
