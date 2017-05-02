export class CategoryController {
  /** @ngInject */
  constructor($log, $mdDialog, $http, API, $scope) {
    $log.info('CategoryController');
    this.$log = $log;
    this.$mdDialog = $mdDialog;
    this.$http = $http;
    this.API = API;
    this.$scope = $scope;
    this.category = {};
  }

  create(isValid) {
    if (isValid) {
      this.$http.post(`${this.API}/category`, this.category)
        .then(res => {
          this.model = this.category;
          this.$log.warn('Salvo com sucesso', res);
          this.$mdDialog.hide();
        })
    }
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  show($event) {
    this.$mdDialog.show({
        scope: this.$scope,
        templateUrl: 'app/components/category/category.dialog.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose: true
      })
      .then(() => {
        this.$log.info('Salvo');
      }, () => {
        this.$log.info('Cancelado');
      })
  }

  destroy() {
    alert('Ainda não implemetado');
  }
}
