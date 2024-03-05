import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from '../models/offre';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'http://localhost:7020/offre/'
  private BaseUrl = 'http://localhost:7020'
  
  

  constructor(private http: HttpClient) { }
  
  public uploadImage(formData: FormData): Observable<string> {
    return this.http.post<string>(this.url + 'uploadImage', formData);
  }
  

  public retrieveAllOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.url + 'retrieveAllOffres');
  }

 

  public addOffre(offre: Offre): Observable<Offre> {
    return this.http.post<Offre>(this.url + 'addOffre', offre);
  }

  public updateOffre(id: number, updateOffre: Offre): Observable<Offre> {
    return this.http.put<Offre>(this.url + 'ModifyOffre/' + id, updateOffre);
  }
  public DeleteOffre(id: number): Observable<void> {
    return this.http.delete<void>(this.url + 'DeleteOffre/' + id);
  }

  public fetchAll2(page: number, pageSize: number): Observable<Offre[]> {
    const params = new HttpParams()
        .set('page', page.toString())
        .set('pageSize', pageSize.toString());
    return this.http.get<Offre[]>(this.url + 'retrieveAllOffres', { params });
}
getPhoto(photo: string): string{
  const photoUrl = `${this.BaseUrl}/download/${photo}`;

  return `${this.BaseUrl}/download/${photo}`;
}
}                                                                                       