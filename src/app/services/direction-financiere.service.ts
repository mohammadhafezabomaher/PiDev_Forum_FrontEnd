import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DirectionFinanciere } from '../models/DirectionFinanciere.model';



@Injectable({
  providedIn: 'root'
})
export class DirectionFinanciereService {
 
url="http://localhost:7020/DirectionFinanciere/"
  constructor(private http: HttpClient) { }
  public fetchAll():Observable<DirectionFinanciere[]>
  {
    return this.http.get<DirectionFinanciere[]>('http://localhost:7020/DirectionFinanciere/retrieveAllDirectionFinanciere');
  }

  public addDirectionFinanciereService(DirectionFinanciere:DirectionFinanciere){
    return this.http.post<DirectionFinanciere>(  'http://localhost:7020/DirectionFinanciere/addDirectionFinanciere' ,DirectionFinanciere)
  }

  public deleteDirectionFinanciereService(id:number){
    return this.http.delete<DirectionFinanciere>('http://localhost:7020/DirectionFinanciere/DeleteDirectionFinanciere/'+id);
  }

  public findByIdDirectionFinanciereService(id: number) {
    return this.http.get<DirectionFinanciereService>(this.url + 'findbyid/' + id);
  }

  public updateDirectionFinanciereService( DirectionFinanciere: DirectionFinanciere) {
    return this.http.put<DirectionFinanciere>("http://localhost:7020/DirectionFinanciere/UpdateDirectionFinanciere", DirectionFinanciereService);
  }
}




 
