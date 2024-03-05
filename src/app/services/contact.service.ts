import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  public fetchAll():Observable<Contact[]>

  {
    return this.http.get<Contact[]>('http://localhost:7020/contact/getall/');
  }
}
