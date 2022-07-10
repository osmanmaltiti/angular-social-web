import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InteractionCountService {
  constructor(private http: HttpClient) {}

  getInteractionCount(postId: string) {
    const token = JSON.parse(String(localStorage.getItem('token')));
    return this.http.get<{
      status: string;
      commentsCount: number;
      likesCount: number;
      unlikesCount: number;
      hasLiked: boolean;
      hasUnliked: boolean;
    }>('http://localhost:5000/api/v1/post/get-interactions-count', {
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      params: new HttpParams().set('postId', postId),
    });
  }
}
