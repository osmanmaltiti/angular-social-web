import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  @Input('popular') popular: any[] = [];
  @Output('onFollow') onfollow: EventEmitter<any> = new EventEmitter();

  onFollow() {
    this.onfollow.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
