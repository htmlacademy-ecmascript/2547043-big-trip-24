import PointView from '../view/point-view';
import ListView from '../view/list-view';
import PointEditingView from '../view/point-editing-view';
import PointCreatingView from '../view/point-creating-view';
import FiltersView from '../view/filters-view';
import SortingView from '../view/sorting-view';

import { render, RenderPosition } from '../render';


export default class GlobalPresenter {
  constructor({listContainer, sortingContainer, filtersContainer}) {
    this.listContainer = listContainer;
    this.filtersContainer = filtersContainer;
    this.sortingContainer = sortingContainer;
  }

  filtersComponent = new FiltersView;
  listComponent = new ListView;
  pointCreatingComponent = new PointView;
  pointEditingComponent = new PointView;

  init() {
    render(this.filtersComponent, this.filtersContainer);
    render(new SortingView, this.sortingContainer);
    render(this.listComponent, this.listContainer);

    render(this.pointCreatingComponent, this.listComponent.getElement());
    render(new PointCreatingView, this.pointCreatingComponent.getElement(), RenderPosition.AFTERBEGIN);

    render(this.pointEditingComponent, this.listComponent.getElement());
    render(new PointEditingView, this.pointEditingComponent.getElement(), RenderPosition.AFTERBEGIN);

    render(new PointView, this.listComponent.getElement());
  }
}
