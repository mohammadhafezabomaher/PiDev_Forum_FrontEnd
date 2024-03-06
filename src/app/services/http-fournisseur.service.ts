import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpFournisseurService {

  url: string = 'http://localhost:7020/pidev/fournisseur/'
  constructor(private http:HttpClient) { }
  public fetchAll (): Observable<Fournisseur[]> {

    return this.http.get<Fournisseur[]>(this.url + 'retrieveAllFournisseurs');
  }

  public delete(id: number) {
    return this.http.delete<Fournisseur>(this.url + 'removeFournisseur/' + id);
  }

  public addTodo(fournisseur: Fournisseur) {

    return this.http.post<Fournisseur>(this.url + 'addFournisseur', fournisseur);
  }

}
