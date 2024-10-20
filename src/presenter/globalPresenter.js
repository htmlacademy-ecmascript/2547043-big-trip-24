import PointView from '../view/point-view';
import ListView from '../view/list-view';
import FiltersView from '../view/filters-view';
import SortingView from '../view/sorting-view';
import PointEditingView from '../view/point-editing-view';

import { render } from '../framework/render';


export default class GlobalPresenter {
  constructor({listContainer, sortingContainer, filtersContainer, pointsModel}) {
    this.listContainer = listContainer;
    this.filtersContainer = filtersContainer;
    this.sortingContainer = sortingContainer;
    this.pointsModel = pointsModel;
  }

  listComponent = new ListView();
  filtersComponent = new FiltersView();
  sortingComponent = new SortingView();

  init() {

    this.globalPoints = [...this.pointsModel.getPoints()];

    render(this.filtersComponent, this.filtersContainer);
    render(this.sortingComponent, this.sortingContainer);
    render(this.listComponent, this.listContainer);

    for(let i = 0; i < this.globalPoints.length; i++) {
      const currentPoint = this.globalPoints[i];
      const currentPointOffers = this.pointsModel.getOffersById(currentPoint);
      const currentPointTypeOffers = this.pointsModel.getOffersByType(currentPoint);
      const allDestinations = this.pointsModel.getDestinations();
      const currentPointDestination = this.pointsModel.getDestinationById(currentPoint.id);

      const pointEditingComponent = new PointEditingView({
        point: currentPoint,
        pointDestination: currentPointDestination,
        pointTypeOffers: currentPointTypeOffers,
        allDestinations: allDestinations
      });

      const pointComponent = new PointView({
        point: currentPoint,
        pointOffers: currentPointOffers,
        pointIdDestination: currentPointDestination
      });

      if(i === 0) {
        render(pointEditingComponent, this.listComponent.element);
      } else {
        render(pointComponent, this.listComponent.element);
      }

    }
  }
}
