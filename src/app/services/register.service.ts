import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignUpInfo } from '../authentication/register/register.component';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private http: HttpClient) {}

  createUser(signupInfo: ISignUpInfo) {
    return this.http.post<{ status: string; id: string; token: string }>(
      'http://localhost:5000/api/v1/user/register',
      signupInfo
    );
  }
}
