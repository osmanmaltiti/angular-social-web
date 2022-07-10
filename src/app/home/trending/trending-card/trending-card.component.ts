import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.css'],
})
export class TrendingCardComponent implements OnInit {
  @Input('popularUser') popularUser: { fullname: string; id: string } = {
    fullname: '',
    id: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
