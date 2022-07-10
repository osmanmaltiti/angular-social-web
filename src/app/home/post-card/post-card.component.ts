import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from '../../services/post.service';
import { InteractionCountService } from './../../services/interaction-count.service';

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

  interactions: { likes: number; unlikes: number; comments: number } = {
    likes: 0,
    unlikes: 0,
    comments: 0,
  };

  constructor(private interactionCountService: InteractionCountService) {}

  ngOnInit(): void {
    this.interactionCountService
      .getInteractionCount(this.postData.id)
      .subscribe({
        next: (value) => {
          this.interactions.comments = value.commentsCount;
          this.interactions.likes = value.likesCount;
          this.interactions.unlikes = value.unlikesCount;
        },
        error: ({ error }) => console.log(error),
      });
  }
}
