import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  writePost: boolean = false;

  toggleWritePost() {
    this.writePost = !this.writePost;
  }

  constructor() {}

  ngOnInit(): void {}
}
