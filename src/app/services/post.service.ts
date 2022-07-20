import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IPosts {
  id: string;
  fullName: string;
  userName: string;
  post: string;
  media: string;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    const token = JSON.parse(String(localStorage.getItem('token')));
    return this.http.get<{ status: string; data: any[] }>(
      'http://localhost:5000/api/v1/post/get-all-posts',
      {
        headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
        params: new HttpParams().set('skip', 0),
      }
    );
  }
}
