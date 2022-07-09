import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from '../../services/post.service';

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
    likes: 10,
    unlikes: 20,
    comments: 278,
  };

  constructor() {}

  ngOnInit(): void {}
}
