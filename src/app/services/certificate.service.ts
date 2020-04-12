import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public createCertificate(body): Observable<any> {
    return this.http.post(this.baseUrl + 'certificate/create', body);
  }

  public getAllCertificates(): Observable<any> {
    return this.http.get(`${this.baseUrl}certificate/getAll`);
  }

  public revokeCertificate(body, id): Observable<any> {
    return this.http.post(`${this.baseUrl}certificate/revoke/${id}`, body);
  }

}
