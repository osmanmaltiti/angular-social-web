import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    this.router.navigate(['/auth']);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
