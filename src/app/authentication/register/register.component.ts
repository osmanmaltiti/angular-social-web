import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  @Output() signUp = new EventEmitter<ISignUpInfo>();
  fullname: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  constructor() {}

  onSignUp() {
    this.signUp.emit({
      fullname: this.fullname,
      email: this.email,
      username: this.username,
      password: this.password,
    });
  }
  ngOnInit(): void {}
}
