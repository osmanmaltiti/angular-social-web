import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreatePostService {
  constructor(private http: HttpClient) {}

  onCreatePost(post: string, media: null | File) {
    const token = JSON.parse(String(localStorage.getItem('token')));
    const username = JSON.parse(String(localStorage.getItem('username')));
    const formdata = new FormData();

    if (media instanceof File) {
      formdata.append('image', media, media.name);
      formdata.append('post', post);
    } else {
      formdata.append('post', post);
    }

    return this.http.post(
      'http://localhost:5000/api/v1/post/create-post',
      formdata,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
          Username: username,
        }),
      }
    );
  }
}
