import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export interface ISignUpInfo {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  onSignUp(formData: NgForm) {
    alert(JSON.stringify(formData.value));
    this.router.navigate(['/']);
  }
  ngOnInit(): void {}
}
