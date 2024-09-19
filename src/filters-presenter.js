import FiltersFormView from './view/filters-form-view';
import { render } from './render';

export default class FiltersPresenter {
  constructor(filtersContainer) {
    this.container = filtersContainer;
  }

  filtersForm = new FiltersFormView;

  init() {
    render(this.filtersForm, this.container);
  }

}
