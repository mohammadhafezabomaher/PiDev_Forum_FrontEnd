import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignant } from '../models/enseignant.model';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private baseUrl = 'http://localhost:3200/enseignant';

  constructor(private http: HttpClient) { }

  addEnseignant(enseignantData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-enseignant`, enseignantData);
  }

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }
  // Define the getEnseignants() method to fetch enseignants from the API
  getEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(`${this.baseUrl}/getEnseignants`);
  }

}
