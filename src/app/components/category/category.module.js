import angular from 'angular';

import {
  category
} from './category.component';

export const categoryModule = 'category';

angular
  .module(categoryModule, [])
  .component('category', category);
