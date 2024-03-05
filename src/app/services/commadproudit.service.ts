import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandeProduit } from '../models/CommandeProduit .model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommadprouditService {




  constructor(private http: HttpClient) { }

  public getbycommand(c:number):Observable<CommandeProduit[]>
  {
    return this.http.get<CommandeProduit[]>(`http://localhost:7020/CommandeProduit/getCommandeProduitBycomm/${c}`);
  }
  public getbyresciver(c: number): Observable<CommandeProduit[]> {
    return this.http.get<CommandeProduit[]>(`http://localhost:7020/Message/getbyresciver/${c}`);
  }
  public fetchAll():Observable<CommandeProduit[]>
  {
    return this.http.get<CommandeProduit[]>("http://localhost:7020/CommandeProduit/retrieveAllCommandeProduit");
  }
  public Delete (id:number){
    return this.http.delete<CommandeProduit>("http://localhost:7020/Commande/DeleteCommande/"+id);
  }

  public add(message:CommandeProduit){
    return this.http.post<CommandeProduit>(  'http://localhost:7020/CommandeProduit/addCommandeProduit' ,message)
  }
}
