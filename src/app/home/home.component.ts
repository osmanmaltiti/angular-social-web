import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService],
})
export class HomeComponent implements OnInit {
  openPostBox: boolean = false;
  posts: any[] = [];
  togglePostBox() {
    this.openPostBox = !this.openPostBox;
  }

  constructor(private postService: PostService, private http: HttpClient) {}

  ngOnInit(): void {
    this.posts = this.postService.posts;
    this.http
      .get<{ userId: number; id: number; title: string; body: string }[]>(
        'https://jsonplaceholder.typicode.com/posts'
      )
      .subscribe((response) => {
        this.posts = response;
      });
  }
}
