import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../services/profile.service';
import { IPosts, UserPostService } from './../../services/user-post.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  profile = {
    fullname: '',
    username: '',
    bio: '',
  };

  postData: IPosts[] = [];

  constructor(
    private profileService: ProfileService,
    private userPostService: UserPostService
  ) {}

  ngOnInit(): void {
    this.onGetProfile();
    this.onGetUserPosts();
  }

  onGetProfile() {
    this.profileService.getProfile().subscribe({
      next: (value) => {
        this.profile.fullname = value.data.fullname;
        this.profile.username = value.data.username;
        this.profile.bio = value.data.bio;
      },
      error: (error) => console.log(error),
    });
  }

  onGetUserPosts() {
    this.userPostService.getUserPosts().subscribe({
      next: (value) => (this.postData = [...value.data]),
      error: (error) => console.log(error),
    });
  }
}
