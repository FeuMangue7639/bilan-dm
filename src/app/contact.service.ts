import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:4200/send-email'; // URL de votre serveur Node.js

  constructor(private http: HttpClient) { }

  sendEmail(contact: any): Observable<any> {
    // Modifie responseType à 'text' pour éviter les erreurs de parsing
    return this.http.post(this.apiUrl, contact, { responseType: 'text' })
      .pipe(
        catchError(error => {
          console.error('Erreur lors de l\'envoi de l\'e-mail', error);
          return throwError(error);
        })
      );
  }
}



