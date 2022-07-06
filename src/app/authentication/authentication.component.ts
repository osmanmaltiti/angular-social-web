import { Component } from '@angular/core';
import { ISignUpInfo } from './register/register.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  obscure: boolean = true;
  passwordFieldType: 'password' | 'text' = 'password';
  email: string = '';
  password: string = '';
  newUser: boolean = false;
  toggleButton: string = 'New User';

  onObscure() {
    this.obscure = !this.obscure;
    if (this.obscure) this.passwordFieldType = 'password';
    else this.passwordFieldType = 'text';
  }

  onLogin() {
    alert(JSON.stringify({ email: this.email, password: this.password }));
  }

  onSignUp(signUpInfo: ISignUpInfo) {
    alert(JSON.stringify(signUpInfo));
  }

  onToggleForm() {
    this.newUser = !this.newUser;
    if (this.newUser) this.toggleButton = 'Log In';
    else this.toggleButton = 'New User';
  }
}
