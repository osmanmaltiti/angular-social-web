import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreatePostService {
  constructor(private http: HttpClient) {}

  onCreatePost(post: string | File) {
    const token = JSON.parse(String(localStorage.getItem('token')));
    const username = JSON.parse(String(localStorage.getItem('username')));
    const formdata = new FormData();
    if (post instanceof File) {
      formdata.append('image', post, post.name);
    }

    const route =
      typeof post === 'string' ? 'create-post' : 'create-image-post';
    const data = typeof post === 'string' ? { post } : formdata;

    return this.http.post('http://localhost:5000/api/v1/post/' + route, data, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
        Username: username,
      }),
    });
  }
}
