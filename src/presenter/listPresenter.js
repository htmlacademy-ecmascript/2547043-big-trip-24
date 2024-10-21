import PointView from '../view/point-view';
import ListView from '../view/list-view';
import PointEditView from '../view/point-edit-view';

import { render, replace } from '../framework/render';
import NoPointView from '../view/no-point-view';


export default class ListPresenter {
  #listContainer;
  #pointsModel;

  #listPoints;

  constructor({listContainer, pointsModel}) {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
  }

  #listComponent = new ListView();

  init() {
    this.#listPoints = [...this.#pointsModel.points];

    this.#renderList();
  }

  #renderPoint (data) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView({...data, onEditClick: () => {
      replacePointToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    }});

    const pointEditComponent = new PointEditView({
      ...data,
      onFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onRollupClick: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#listComponent.element);
  }

  #renderList () {
    render(this.#listComponent, this.#listContainer);

    if (this.#listPoints.length === 0) {
      render(new NoPointView(), this.#listComponent.element);
    }

    for(let i = 0; i < this.#listPoints.length; i++) {
      const currentPoint = this.#listPoints[i];
      const data = {
        point: currentPoint,
        pointOffers: this.#pointsModel.getOffersById(currentPoint),
        pointTypeOffers: this.#pointsModel.getOffersByType(currentPoint),
        allDestinations: this.#pointsModel.destinations,
        pointDestination: this.#pointsModel.getDestinationById(currentPoint.id),
      };

      this.#renderPoint(data);
    }
  }
}
