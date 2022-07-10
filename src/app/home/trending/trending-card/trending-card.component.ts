import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FollowService } from './../../../services/follow.service';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.css'],
})
export class TrendingCardComponent implements OnInit {
  @Output('onfollow') onfollow: EventEmitter<any> = new EventEmitter();
  @Input('popularUser') popularUser: {
    fullname: string;
    email: string;
  } = {
    fullname: '',
    email: '',
  };

  followStatus: { following: boolean; follower: boolean } = {
    following: false,
    follower: false,
  };

  constructor(private followService: FollowService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getFollowStatus(this.popularUser.email);
  }

  follow() {
    this.followService.onFollow(this.popularUser.email).subscribe({
      next: () => {
        this.onfollow.emit();
        this.getFollowStatus(this.popularUser.email);
      },
      error: ({ error }) => console.log(error),
    });
  }

  getFollowStatus(email: string) {
    const token = JSON.parse(String(localStorage.getItem('token')));
    this.http
      .post<{ status: string; data: any }>(
        'http://localhost:5000/api/v1/user/follow-status',
        { email },
        {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          }),
        }
      )
      .subscribe({
        next: (value) => (this.followStatus = value.data),
        error: ({ error }) => console.log(error),
      });
  }
}
