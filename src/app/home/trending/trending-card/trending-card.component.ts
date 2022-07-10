import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FollowService } from './../../../services/follow.service';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.css'],
})
export class TrendingCardComponent implements OnInit {
  @Output('onfollow') onfollow: EventEmitter<any> = new EventEmitter();
  @Input('popularUser') popularUser: { fullname: string; email: string } = {
    fullname: '',
    email: '',
  };

  constructor(private followService: FollowService) {}

  ngOnInit(): void {}

  follow() {
    this.followService.onFollow(this.popularUser.email).subscribe({
      next: () => this.onfollow.emit(),
      error: ({ error }) => console.log(error),
    });
  }
}
