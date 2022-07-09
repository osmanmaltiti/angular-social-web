import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  obscure: boolean = true;
  passwordFieldType: 'password' | 'text' = 'password';

  constructor(private router: Router, private loginService: LoginService) {}

  onObscure() {
    this.obscure = !this.obscure;
    if (this.obscure) this.passwordFieldType = 'password';
    else this.passwordFieldType = 'text';
  }

  onLogin(formData: NgForm) {
    this.loginService.onLogin(formData.value).subscribe({
      next: (value) => {
        if (value.status === 'Success') {
          localStorage.setItem('token', JSON.stringify(value.token));
          localStorage.setItem('id', JSON.stringify(value.id));
          this.router.navigate(['/']);
        }
      },
      error: ({ error }) => console.log(error.message),
    });
  }

  ngOnInit(): void {}
}
