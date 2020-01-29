import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailerService {
  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, message: string): Observable<string> {
    const apiUrl = 'https://a1hso5v45c.execute-api.us-east-1.amazonaws.com/prod';

    return this.http.post<any>(`${apiUrl}/contact/`, {
      name,
      email,
      message
    });
  }
}
