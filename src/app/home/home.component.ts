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

  constructor(
    private postService: PostService,
    private getPopularService: GetPopularService,
    private getMiniProfileService: GetMiniProfileService
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

  togglePostBox() {
    this.openPostBox = !this.openPostBox;
  }

  onGetMiniProfile() {
    this.getMiniProfileService.getMiniProfile().subscribe({
      next: (value) => {
        this.miniProfile = value.data;
        localStorage.setItem(
          'username',
          JSON.stringify(value.data.userdata.username)
        );
      },
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
