import angular from 'angular';

import {
  categoryModule
} from './../../components/category/category.module';

import {
  product
} from './product.component';

export const productModule = 'product-module';

angular
  .module(productModule, ['ui.router', categoryModule])
  .component('product', product)
  .config(['$stateProvider', $stateProvider => {
    $stateProvider
      .state('app.product', {
        url: '/dashboard',
        views: {
          content: {
            template: '<product></product>'
          }
        }
      });
  }]);
