import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetPopularService } from '../services/get-popular.service';
import { GetMiniProfileService } from '../services/mini-profile.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  openPostBox: boolean = false;
  posts: any[] = [];
  popular: any[] = [];
  miniProfile: any = {};
  fetchFailed: string = '';
  fetchPopularFailed: string = '';

  togglePostBox() {
    this.openPostBox = !this.openPostBox;
  }

  constructor(
    private postService: PostService,
    private getPopularService: GetPopularService,
    private getMiniProfileService: GetMiniProfileService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (value) => (this.posts = value.data),
      error: ({ error }) => (this.fetchFailed = error.message),
    });
    this.getPopularService.getPopular().subscribe({
      next: (value) => (this.popular = value.data),
      error: ({ error }) => (this.fetchPopularFailed = error.message),
    });
    this.getMiniProfileService.getMiniProfile().subscribe({
      next: (value) => (this.miniProfile = value.data),
      error: ({ error }) => (this.fetchPopularFailed = error.message),
    });
  }
}

export interface IMiniProfile {
  username: string;
  bio: string;
  createdAt: string;
}
