import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

export interface ISignUpInfo {
  fullname: string;
  username: string;
  email: string;
  password: string;
  bio: string;
  age: number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  onSignUp(formData: NgForm) {
    const fieldisEmpty = Object.values(formData.value).some(
      (item) => item === ''
    );

    if (!fieldisEmpty) {
      const addExtras: ISignUpInfo = {
        ...formData.value,
        bio: "Here there, i'm on social web!",
        age: 1,
      };

      this.registerService.createUser(addExtras).subscribe({
        next: (value) => {
          if (value.status === 'Success') {
            localStorage.setItem('token', JSON.stringify(value.token));
            localStorage.setItem('id', JSON.stringify(value.id));
            this.router.navigate(['/']);
          }
        },
        error: ({ error }) => {
          this.errorMessage = error.message;
        },
      });
    } else {
      alert('All fields are required');
    }
  }

  closeAlert(data: string) {
    this.errorMessage = data;
  }
  ngOnInit(): void {}
}
