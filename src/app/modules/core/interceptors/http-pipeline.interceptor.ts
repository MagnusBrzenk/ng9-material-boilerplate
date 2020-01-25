import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { timeout, map, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { apiDefaultTimeoutMs } from 'src/app/utils/constants';

@Injectable()
export class PipelineInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Do sth here to req before it goes out (e.g. add headers)
    // Be sure to treat req as an immutible
    // ...

    // Create rxjs pipeline for handling response events
    const timeoutValue = parseInt(req.headers.get('timeout'), 10) || apiDefaultTimeoutMs;
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          // Do sth with response
        }
        return event;
      }),
      // Throw error response not received before timeoutValue
      timeout(timeoutValue),
      // Handle errors
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        let clientMessage = '';

        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
          clientMessage = `A network error occurred originating in your browser.`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          clientMessage = `The data API is unreachable. Please try again later.`;
        }
        // Inform user that there's a problem
        this.snackBar.open(clientMessage, 'Close', {
          duration: 5000
        });
        // Throw error to discontinue pipe
        return throwError(errorMessage);
      }),
      // Last chance café
      map(event => {
        console.log('API pipeline completed');
        return event;
      })
    );
  }
}
