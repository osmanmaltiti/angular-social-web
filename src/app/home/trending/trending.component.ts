import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  dummyArray: number[] = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit(): void {}
}
