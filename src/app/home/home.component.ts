import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  writePost: boolean = false;
  dummyArray: number[] = [1, 2, 3, 4, 5, 6, 7];

  toggleWritePost() {
    this.writePost = !this.writePost;
  }

  constructor() {}

  ngOnInit(): void {}
}
