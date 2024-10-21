import ListPresenter from './presenter/listPresenter';
import PointsModel from './model/points-model';

const listPresenter = new ListPresenter(
  {
    filtersContainer: document.querySelector('.trip-controls__filters'),
    listContainer: document.querySelector('.trip-events'),
    sortingContainer: document.querySelector('.trip-events'),
    pointsModel: new PointsModel()
  }
);

listPresenter.init();
