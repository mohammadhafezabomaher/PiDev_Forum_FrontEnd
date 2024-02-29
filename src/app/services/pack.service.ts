import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pack } from '../models/Pack.model';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  private apiUrl = 'http://localhost:7020/pack';

  constructor(private http: HttpClient) {}
  createPack(pack: Pack): Observable<Pack> {
    return this.http.post<Pack>(this.apiUrl+"/add", pack);
  }
  // Retrieve all categories
  getAllPacks(): Observable<Pack[]> {
    return this.http.get<Pack[]>(`${this.apiUrl}/getall`);
  }
  // Get a category by ID
  getPackById(id: number): Observable<Pack> {
    const url = `${this.apiUrl+"/get"}/${id}`;
    console.log(url);
    return this.http.get<Pack>(url);
  }
  // Update an existing category by ID
  updatePack(pack: Pack): Observable<Pack> {
    const url = `${this.apiUrl+"/update"}/${pack.idPack}`;
    return this.http.put<Pack>(url, pack);
  }
  // Delete a category by ID
  deletePack(id: number): Observable<void> {
    const url = `${this.apiUrl+"/delete"}/${id}`;
    return this.http.delete<void>(url);
  }  
}
