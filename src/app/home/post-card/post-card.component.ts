import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from '../../services/post.service';
import { InteractionCountService } from './../../services/interaction-count.service';
import { LikeUnlikeService } from './../../services/like-unlike.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input('postData') postData: IPosts = {
    id: '',
    fullName: '',
    userName: '',
    post: '',
    createdAt: '',
  };
  timeCreated = new Date(Number(this.postData.createdAt));

  interactions: {
    likes: number;
    unlikes: number;
    comments: number;
    hasLiked: boolean;
    hasUnliked: boolean;
  } = {
    likes: 0,
    unlikes: 0,
    comments: 0,
    hasLiked: false,
    hasUnliked: false,
  };

  constructor(
    private interactionCountService: InteractionCountService,
    private likeUnlikeService: LikeUnlikeService
  ) {}

  onGetInteractions() {
    this.interactionCountService
      .getInteractionCount(this.postData.id)
      .subscribe({
        next: (value) => {
          this.interactions.comments = value.commentsCount;
          this.interactions.likes = value.likesCount;
          this.interactions.unlikes = value.unlikesCount;
          this.interactions.hasLiked = value.hasLiked;
          this.interactions.hasUnliked = value.hasUnliked;
        },
        error: ({ error }) => console.log(error),
      });
  }

  ngOnInit(): void {
    this.onGetInteractions();
  }

  onLikePost() {
    this.likeUnlikeService.likePost(this.postData.id).subscribe({
      next: () => this.onGetInteractions(),
      error: ({ error }) => console.log(error),
    });
  }

  onUnlikePost() {
    this.likeUnlikeService.unlikePost(this.postData.id).subscribe({
      next: () => this.onGetInteractions(),
      error: ({ error }) => console.log(error),
    });
  }
}
