import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Admin } from '../models/Admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:7020/admin';
  private BaseUrl = 'http://localhost:7020';

  constructor(private http: HttpClient) {}
  createAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.apiUrl+"/add", admin);
  }
  // Retrieve all categories
  getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiUrl}/getall`);
  }
  // Get a category by ID
  getAdminById(id: number): Observable<Admin> {
    const url = `${this.apiUrl+"/get"}/${id}`;
    console.log(url);
    return this.http.get<Admin>(url);
  }
  // Update an existing category by ID
  updateAdmin(admin: Admin): Observable<Admin> {
    const url = `${this.apiUrl+"/update"}`;
    return this.http.put<Admin>(url, admin);
  }
  // Delete a category by ID
  deleteAdmin(id: number): Observable<void> {
    const url = `${this.apiUrl+"/delete"}/${id}`;
    return this.http.delete<void>(url);
  }  
  getPhoto(photo: string): string{
    const photoUrl = `${this.BaseUrl}/download/${photo}`;

    return `${this.BaseUrl}/download/${photo}`;
  }
}

