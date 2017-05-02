import {
  CategoryController
} from './category.controller';

export const category = {
  templateUrl: 'app/components/category/category.html',
  controller: CategoryController,
  bindings: {
    model: '='
  }
}
