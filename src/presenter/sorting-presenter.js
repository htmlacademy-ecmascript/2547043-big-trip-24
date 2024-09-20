import SortingFormView from '../view/sorting-form-view';
import { render } from '../render';

export default class SortingPresenter {
  constructor(sortingContainer) {
    this.container = sortingContainer;
  }

  init() {
    render(new SortingFormView, this.container);
  }

}
