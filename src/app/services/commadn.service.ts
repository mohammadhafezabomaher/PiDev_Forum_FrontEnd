import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../models/Commande.model';
@Injectable({
  providedIn: 'root'
})
export class CommadnService {

  constructor(private http: HttpClient) { }
  public getBySender(c:number):Observable<Commande[]>
  {
    return this.http.get<Commande[]>(`http://localhost:8050/pidev/Message/getbysender/${c}`);
  }
  public getbyresciver(c: number): Observable<Commande[]> {
    return this.http.get<Commande[]>(`http://localhost:8050/pidev/Message/getbyresciver/${c}`);
  }
  public fetchAll():Observable<Commande[]>
  {
    return this.http.get<Commande[]>("http://localhost:8050/pidev/Commande/retrieveAllCommande");
  }
  public Delete (id:number){
    return this.http.delete<Commande>("http://localhost:8050/pidev/Commande/DeleteCommande/"+id);
  }

  public add(message:Commande){
    return this.http.post<Commande>(  'http://localhost:8050/pidev/Commande/addCommande' ,message)
  }

}
