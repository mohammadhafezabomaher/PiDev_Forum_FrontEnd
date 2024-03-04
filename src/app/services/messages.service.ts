  import { Contact } from 'src/app/models/Contact.model';
  import { Message } from './../models/Meassage.model';
  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class MessagesService {
    constructor(private http: HttpClient) { }
    public getBySender(c:number):Observable<Message[]>
    {
      return this.http.get<Message[]>(`http://localhost:8050/pidev/Message/getbysender/${c}`);
    }
    public getbyresciver(c: number): Observable<Message[]> {
      return this.http.get<Message[]>(`http://localhost:8050/pidev/Message/getbyresciver/${c}`);
    }
  


    public add(message:Message){
      return this.http.post<Message>(  'http://localhost:8050/pidev/Message/Send' ,message)
    }

  
  }
