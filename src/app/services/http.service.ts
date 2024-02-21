import { Injectable } from '@angular/core';
import { NiveauSpecialite } from '../models/niveauspecialite';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string='http://localhost:9000/examen/niveauSpecialite/'
  constructor(private http:HttpClient) 
  {}
  public getAllNiveauSpecialites():Observable<NiveauSpecialite[]>
  {
    return this.http.get<NiveauSpecialite[]>(this.url+'findall');
  }
  public createNiveauSpecialite(niveauSpecialite:NiveauSpecialite){
    return this.http.post<NiveauSpecialite>(this.url + 'add' ,niveauSpecialite)
  }
  public deleteNiveauSpecialite(id:number){
    return this.http.delete<NiveauSpecialite>(this.url+'delete/'+id);
  }

  public getNiveauSpecialiteById(id: number) {
    return this.http.get<NiveauSpecialite>(this.url + 'find/' + id);
  }

  public update(id: number, niveauSpecialite: NiveauSpecialite) {
    return this.http.put<NiveauSpecialite>(this.url + 'update/' + id, niveauSpecialite);
  }

}