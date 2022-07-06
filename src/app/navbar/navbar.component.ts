import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  mobileDropdown: boolean = false;
  searchValue: string = '';

  onToggleDropdown() {
    this.mobileDropdown = !this.mobileDropdown;
  }

  constructor() {}

  ngOnInit(): void {}
}
