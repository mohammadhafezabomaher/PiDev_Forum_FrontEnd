import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exposant } from '../models/Exposant';


@Injectable({
  providedIn: 'root'
})
export class ExposantService {
  url: string = 'http://localhost:7020/exposant/';

  constructor(private http: HttpClient) { }

  public updateExposant(id: number, updateExposant: Exposant): Observable<Exposant> {
    return this.http.put<Exposant>(this.url + 'ModifyExposant/' + id, updateExposant);
  }

  public addExposant(exposant: Exposant): Observable<Exposant> { // Assurez-vous de retourner un Observable<Exposant>
    return this.http.post<Exposant>(this.url + 'addExposant', exposant);
  }

  public DeleteExposant(id: number): Observable<void> {
    return this.http.delete<void>(this.url + 'DeleteExposant/' + id);
  }

  public retrieveAllExposants(): Observable<Exposant[]> {
    return this.http.get<Exposant[]>(this.url + 'retrieveAllExposants');
  }
}
