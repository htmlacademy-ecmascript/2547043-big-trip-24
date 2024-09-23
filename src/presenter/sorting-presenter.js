import SortingView from '../view/sorting-view';
import { render } from '../render';

export default class SortingPresenter {
  constructor(sortingContainer) {
    this.container = sortingContainer;
  }

  init() {
    render(new SortingView, this.container);
  }

}
