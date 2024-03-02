import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  url:string='http://localhost:9000/examen/etudiants/'

  constructor(private http:HttpClient) { }

  public getAllEtudiants():Observable<Etudiant[]>
  {
    return this.http.get<Etudiant[]>(this.url+'findall');
  }


  public createEtudiant(etudiant:Etudiant){
    return this.http.post<Etudiant>(this.url + 'add' ,etudiant)
  }

  public deleteEtudiant(id:number){
    return this.http.delete<Etudiant>(this.url+'delete/'+id);
  }

  public getEtudiantById(id: number) {
    return this.http.get<Etudiant>(this.url + 'find/' + id);
  }

  public update(id: number, etudiant: Etudiant) {
    return this.http.put<Etudiant>(this.url + 'update/' + id, etudiant);
  }

  public searchEtudiantsByIdentifiant(identifiant: string): Observable<Etudiant[]> {
    const apiUrl = `${this.url}searchByIdentifiant/${identifiant}`;
    return this.http.get<Etudiant[]>(apiUrl);
  }
}
