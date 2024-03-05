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
  //private apiUrl = 'http://localhost:3310/enseignant/retrieve-all-enseignant';

  getEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(`${this.baseUrl}/retrieve-all-enseignant`);
  }

}
