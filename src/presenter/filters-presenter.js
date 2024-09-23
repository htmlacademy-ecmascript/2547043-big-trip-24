import FiltersView from '../view/filters-view';
import { render } from '../render';

export default class FiltersPresenter {
  constructor(filtersContainer) {
    this.container = filtersContainer;
  }

  filters = new FiltersView;

  init() {
    render(this.filters, this.container);
  }

}
