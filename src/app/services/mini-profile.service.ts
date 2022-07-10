import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GetMiniProfileService {
  constructor(private http: HttpClient) {}

  getMiniProfile() {
    const token = JSON.parse(String(localStorage.getItem('token')));
    return this.http.get<{ status: string; data: any }>(
      'http://localhost:5000/api/v1/user/mini-profile',
      {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      }
    );
  }
}
