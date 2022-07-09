import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreatePostService {
  constructor(private http: HttpClient) {}

  onCreatePost(post: string) {
    const token = JSON.parse(String(localStorage.getItem('token')));
    return this.http.post(
      'http://localhost:5000/api/v1/post/create-post',
      { post },
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      }
    );
  }
}
