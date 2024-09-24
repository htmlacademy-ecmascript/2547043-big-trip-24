import PointView from '../view/point-view';
import ListView from '../view/list-view';
import PointEditingView from '../view/point-editing-view';
import PointCreatingView from '../view/point-creating-view';
import FiltersView from '../view/filters-view';
import SortingView from '../view/sorting-view';

import { render, RenderPosition } from '../render';


export default class GlobalPresenter {
  constructor({listContainer, sortingContainer, filtersContainer, pointsModel}) {
    this.listContainer = listContainer;
    this.filtersContainer = filtersContainer;
    this.sortingContainer = sortingContainer;
    this.pointsModel = pointsModel;
  }

  listComponent = new ListView;
  filtersComponent = new FiltersView;
  sortingComponent = new SortingView;
  pointCreatingComponent = new PointView;
  pointEditingComponent = new PointView;

  init() {

    this.globalPoints = [...this.pointsModel.getPoints()];

    render(this.filtersComponent, this.filtersContainer);
    render(this.sortingComponent, this.sortingContainer);
    render(this.listComponent, this.listContainer);

    for(let i = 0; i < this.globalPoints.length; i++) {
      render(new PointView({ point: this.globalPoints[i] }), this.listComponent.getElement());
    }

    // render(this.pointCreatingComponent, this.listComponent.getElement());
    // render(new PointCreatingView, this.pointCreatingComponent.getElement(), RenderPosition.AFTERBEGIN);

    // render(this.pointEditingComponent, this.listComponent.getElement());
    // render(new PointEditingView, this.pointEditingComponent.getElement(), RenderPosition.AFTERBEGIN);


  }
}
