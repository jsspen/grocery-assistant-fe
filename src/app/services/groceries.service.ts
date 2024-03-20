import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groceries } from '../models/groceries.model';

const baseUrl = 'http://localhost:8080/api/groceries';

@Injectable({
  providedIn: 'root',
})
export class GroceriesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Groceries[]> {
    return this.http.get<Groceries[]>(baseUrl);
  }

  get(id: any): Observable<Groceries> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Groceries[]> {
    return this.http.get<Groceries[]>(`${baseUrl}?title=${title}`);
  }
}
