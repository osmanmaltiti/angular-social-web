import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  @Input('popular') popular: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
