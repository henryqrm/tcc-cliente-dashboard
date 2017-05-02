class LoginController {
  /** @ngInject */
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
    this.err = false;
    this.user = {
      email: 'henryqrm@gmail.com',
      password: '12345678'
    }
  }

  login(isValid) {
    if (isValid) {
      this.Auth.login(this.user.email, this.user.password)
        .then(() => {
          this.$state.go('app.product');
        })
        .catch(err => {
          this.err = true;
          console.log('err', err);
          this.Auth.logout();
        });
    }
  }
}
export const loginComponent = {
  templateUrl: 'app/pages/login/login.html',
  controller: LoginController
};
