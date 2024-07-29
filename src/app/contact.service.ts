import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:4200/send-email'; // URL de votre serveur Node.js

  constructor(private http: HttpClient) { }

  sendEmail(contact: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contact);
  }
}


