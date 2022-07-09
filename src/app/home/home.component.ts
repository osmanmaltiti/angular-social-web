import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  openPostBox: boolean = false;
  posts: any[] = [];
  fetchFailed: string = '';

  togglePostBox() {
    this.openPostBox = !this.openPostBox;
  }

  constructor(private postService: PostService, private http: HttpClient) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (value) => (this.posts = value.data),
      error: ({ error }) => (this.fetchFailed = error.message),
    });
  }
}
