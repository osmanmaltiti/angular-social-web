import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from '../post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input('postData') postData: IPosts = {
    id: '',
    fullname: '',
    username: '',
    post: '',
    body: '',
  };
  interactions: { likes: number; unlikes: number; comments: number } = {
    likes: 10,
    unlikes: 20,
    comments: 278,
  };

  constructor() {}

  ngOnInit(): void {}
}
