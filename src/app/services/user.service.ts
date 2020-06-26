import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}user/getAll`);
  }

  // public deleteUser(id): Observable<any> {
  //   return this.http.get(`${this.baseUrl}user/${id}`);
  // }
}
