import GlobalPresenter from './presenter/globalPresenter';
import PointsModel from './model/points-model';

const filtersContainer = document.querySelector('.trip-controls__filters');
const listContainer = document.querySelector('.trip-events');
const sortingContainer = document.querySelector('.trip-events');

const pointsModel = new PointsModel;

const globalPresenter = new GlobalPresenter(
  {
    filtersContainer: filtersContainer,
    listContainer: listContainer,
    sortingContainer: sortingContainer,
    pointsModel: pointsModel
  }
);

globalPresenter.init();
