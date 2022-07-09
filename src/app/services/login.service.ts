import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ILoginData {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) {}

  onLogin(loginData: ILoginData) {
    return this.http.post<{ status: string; id: string; token: string }>(
      'http://localhost:5000/api/v1/user/login',
      loginData
    );
  }
}
