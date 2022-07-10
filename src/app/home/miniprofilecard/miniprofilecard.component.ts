import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniprofilecard',
  templateUrl: './miniprofilecard.component.html',
  styleUrls: ['./miniprofilecard.component.css'],
})
export class MiniprofilecardComponent implements OnInit {
  @Input('miniprofile-data') miniprofile = {
    userdata: {
      username: '',
      bio: '',
      createdAt: '',
    },
    follow: {
      following: [],
      followers: [],
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
