import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUpInfo } from './register/register.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  passwordFieldType: 'password' | 'text' = 'password';
  email: string = '';
  password: string = '';
  newUser: boolean = false;
  toggleButton: string = 'New User';

  constructor(private router: Router) {}

  onSignUp(signUpInfo: ISignUpInfo) {
    alert(JSON.stringify(signUpInfo));
  }

  onToggleForm() {
    this.newUser = !this.newUser;
    if (this.newUser) {
      this.router.navigate(['/auth/register']);
      this.toggleButton = 'Log In';
    } else {
      this.router.navigate(['/auth']);
      this.toggleButton = 'New User';
    }
  }
}
