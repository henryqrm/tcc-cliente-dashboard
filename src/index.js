import angular from 'angular';

import {
  newnessModule
} from './app/pages/newness/newness.module';
import {
  loginModule
} from './app/pages/login/login.module';
import {
  productModule
} from './app/pages/product/product.module';

import {
  Auth
} from './app/auth/auth';

import {
  AuthInterception
} from './app/auth/interception';

import routesAuth from './app/auth/router.decorator';

import routesConfig from './routes';

import {
  main
} from './app/template/main';
import {
  header
} from './app/template/header';
import {
  footer
} from './app/template/footer';
import {
  nav
} from './app/template/nav';

import 'font-awesome/scss/font-awesome.scss';
import './index.scss';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material-data-table';

angular
  .module('app', [
    newnessModule,
    loginModule,
    productModule,
    'ui.router',
    'ngMaterial',
    'md.data.table'
  ])
  .config(routesConfig)
  .run(routesAuth)
  .component('app', main)
  .component('hHeader', header)
  .component('hNav', nav)
  .component('hFooter', footer)
  .service('Auth', Auth)
  .service('AuthInterception', AuthInterception)
  .constant('API', 'http://localhost:9000/api');
