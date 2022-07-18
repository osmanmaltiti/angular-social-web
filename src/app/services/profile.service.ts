import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile() {
    const token = JSON.parse(String(localStorage.getItem('token')));
    return this.http.get<{
      status: string;
      data: { fullname: string; username: string; bio: string };
    }>('http://localhost:5000/api/v1/user/profile', {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
    });
  }
}
