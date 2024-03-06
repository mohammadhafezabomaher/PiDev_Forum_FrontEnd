import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProduitService {

  url: string = 'http://localhost:7020/pidev/produit/'

  private BaseUrl = 'http://localhost:7020/pidev'
  constructor(private http:HttpClient) { }
  public fetchAll (): Observable<Produit[]> {

    return this.http.get<Produit[]>(this.url + 'retrieveAllProduits');
  }

  public addTodo(produit: Produit) {

    return this.http.post<Produit>(this.url + 'addProduit', produit);
  }

  public delete(id: number) {
    return this.http.delete<Produit>(this.url + 'removeProduit/' + id);
  }
  public updateProduit(id: number, updatedProduit: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.url + 'modifyProduit/' + id, updatedProduit);
  }

  searchProduitsByLibelle(libelle: string): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.url}search?libelle=${libelle}`);
  }

  public fetchAll2(page: number, pageSize: number): Observable<Produit[]> {
    const params = new HttpParams()
        .set('page', page.toString())
        .set('pageSize', pageSize.toString());
    return this.http.get<Produit[]>(this.url + 'retrieveProduits', { params });
}



public addProduct(formData: FormData): Observable<Produit> {
  return this.http.post<Produit>(this.url + 'addProduit', formData);
}

public getPhoto(photo: string): string{
  const photoUrl = `${this.BaseUrl}/download/${photo}`;
  console.log(photoUrl)
  return `${this.BaseUrl}/download/${photo}`;
}

}
