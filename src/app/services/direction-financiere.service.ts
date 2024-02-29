import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DirectionFinanciere } from '../models/DirectionFinanciere.model';



@Injectable({
  providedIn: 'root'
})
export class DirectionFinanciereService {
 

  constructor(private http: HttpClient) { }
  public fetchAll():Observable<DirectionFinanciere[]>
  {
    return this.http.get<DirectionFinanciere[]>('http://localhost:8050/pidev/DirectionFinanciere/retrieveAllDirectionFinanciere');
  }

  // public addDirectionFinanciereService(DirectionFinanciereService:DirectionFinanciereService){
  //   return this.http.post<DirectionFinanciereService>(this.url + 'add' ,DirectionFinanciereService)
  // }

  // public deleteDirectionFinanciereService(id:number){
  //   return this.http.delete<DirectionFinanciereService>(this.url+'delete/'+id);
  // }

  // public findByIdDirectionFinanciereService(id: number) {
  //   return this.http.get<DirectionFinanciereService>(this.url + 'findbyid/' + id);
  // }

  // public updateDirectionFinanciereService(id: number, DirectionFinanciereService: DirectionFinanciereService) {
  //   return this.http.put<DirectionFinanciereService>(this.url + 'update/' + id, DirectionFinanciereService);
  // }
}




 
