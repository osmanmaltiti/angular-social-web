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
  miniProfile = initialProfile;
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
    this.onGetPosts();
    this.onGetMiniProfile();
    this.getPopularService.getPopular().subscribe({
      next: (value) => (this.popular = value.data),
      error: ({ error }) => (this.fetchPopularFailed = error.message),
    });
  }

  onGetPosts() {
    this.postService.getPosts().subscribe({
      next: (value) => (this.posts = value.data),
      error: ({ error }) => (this.fetchFailed = error.message),
    });
  }

  onGetMiniProfile() {
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

const initialProfile = {
  userdata: {
    username: '',
    bio: '',
    createdAt: '',
  },
  follow: {
    following: [],
    followers: [],
  },
};
