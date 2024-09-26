import PointView from '../view/point-view';
import ListView from '../view/list-view';
import FiltersView from '../view/filters-view';
import SortingView from '../view/sorting-view';

import { render, /*RenderPosition*/ } from '../render';


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

  init() {

    this.globalPoints = [...this.pointsModel.getPoints()];

    render(this.filtersComponent, this.filtersContainer);
    render(this.sortingComponent, this.sortingContainer);
    render(this.listComponent, this.listContainer);

    for(let i = 0; i < this.globalPoints.length; i++) {
      const currentPoint = this.globalPoints[i];
      const currentPointOffers = this.pointsModel.getOffersById(currentPoint);
      const currentPointDestination = this.pointsModel.getDestinationById(currentPoint.id);
      render(new PointView(
        {
          point: currentPoint,
          pointOffers: currentPointOffers,
          pointIdDestination: currentPointDestination
        }
      ), this.listComponent.getElement());
    }

    // render(this.pointCreatingComponent, this.listComponent.getElement());
    // render(new PointCreatingView, this.pointCreatingComponent.getElement(), RenderPosition.AFTERBEGIN);

    // render(this.pointEditingComponent, this.listComponent.getElement());
    // render(new PointEditingView, this.pointEditingComponent.getElement(), RenderPosition.AFTERBEGIN);

    // import PointEditingView from '../view/point-editing-view';
    // import PointCreatingView from '../view/point-creating-view';

    //pointCreatingComponent = new PointView;
    //pointEditingComponent = new PointView;


  }
}
