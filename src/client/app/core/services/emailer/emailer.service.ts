import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/client/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailerService {
  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, message: string): Observable<string> {
    let apiUrl = environment.emailerEndpoint;

    return this.http.post<any>(`${apiUrl}/contact/`, {
      name,
      email,
      message
    });
  }
}
