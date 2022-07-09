export class FakeAuth {
  isLoggedIn: boolean = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }
}
