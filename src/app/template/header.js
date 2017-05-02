class HeaderController {
  /** @ngInject */
  constructor(Auth, $rootScope) {
    this.Auth = Auth;
    this.$rootScope = $rootScope;
  }
  $onInit() {
    this.Auth
      .getUser()
      .then(res => {
        this.user = res.data;
      }).catch(err => {
        this.Auth.logout();
      });
  }
  logout() {
    this.Auth.logout();
  }
}

export const header = {
  templateUrl: 'app/template/header.html',
  controller: HeaderController
};
