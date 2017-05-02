export class Auth {
  /** @ngInject */
  constructor(API, $location, $http, $q, $window, $state) {
    this.apiAuth = `${API}/user/auth`;
    this.apiUser = `${API}/user`;
    this.$location = $location;
    this.$http = $http;
    this.$q = $q;
    this.$window = $window;
    this.$state = $state;
    this.currentUser = null;
  }

  getUser() {
    return this.$http.get(`${this.apiUser}/${this.getStorage('userId')}`);
  }

  login(email, password) {
    const data = {
      email,
      password
    };

    return this.$http.post(this.apiAuth, data)
      .then(res => {
        this.setStorage('userId', res.data.id);
        this.currentUser = res.data;
      })
      .catch(err => {
        return this.$q.reject(err.data);
      });
  }
  getStorage(name) {
    return this.$window.localStorage.getItem(name);
  }
  setStorage(name, data) {
    this.$window.localStorage.setItem(name, data);
  }
  logout() {
    this.$window.localStorage.removeItem('userId');
    this.$state.go('login');
  }
  isLoggedIn() {
    const defer = this.$q.defer();
    this.getUser().then(() => {
      defer.resolve(true);
    }).catch(() => {
      defer.reject(true);
    });
    return defer.promise;
  }
}
