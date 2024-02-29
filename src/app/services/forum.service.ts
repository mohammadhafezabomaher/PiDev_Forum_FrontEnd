import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from '../models/Forum.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private apiUrl = 'http://localhost:7020/forum';

  constructor(private http: HttpClient) {}
  createForum(forum: Forum): Observable<Forum> {
    return this.http.post<Forum>(this.apiUrl+"/add", forum);
  }
  getAllForums(): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${this.apiUrl}/getall`);
  }
  getForumById(id: number): Observable<Forum> {
    const url = `${this.apiUrl+"/get"}/${id}`;
    console.log(url);
    return this.http.get<Forum>(url);
  }
  updateForum(forum: Forum): Observable<Forum> {
    const url = `${this.apiUrl+"/update"}/${forum.idForum}`;
    return this.http.put<Forum>(url, forum);
  }
  deleteForum(id: number): Observable<void> {
    const url = `${this.apiUrl+"/delete"}/${id}`;
    return this.http.delete<void>(url);
  }  
}
