import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  dummyArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  constructor() {}

  ngOnInit(): void {}
}
