import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:3000/send'; // Remplacez par l'URL de votre serveur Maildev

  constructor(private http: HttpClient) { }

  sendEmail(contact: any): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }
}

