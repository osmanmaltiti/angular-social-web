import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreatePostService } from './../../services/create-post.service';

@Component({
  selector: 'app-postbox',
  templateUrl: './postbox.component.html',
  styleUrls: ['./postbox.component.css'],
})
export class PostboxComponent implements OnInit {
  @Output('oncreatepost') oncreatepost: EventEmitter<any> = new EventEmitter();
  @Input('setOpen') setOpen: boolean = false;
  post: string = '';

  constructor(private createPostService: CreatePostService) {}

  createPost() {
    this.createPostService.onCreatePost(this.post).subscribe({
      next: () => this.oncreatepost.emit(),
      error: ({ error }) => console.log(error),
    });
  }
  ngOnInit(): void {}
}
