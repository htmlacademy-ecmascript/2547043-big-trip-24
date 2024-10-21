import { render } from './framework/render';
import { generateFiltersData } from './mock/filters-mock';

import ListPresenter from './presenter/listPresenter';
import PointsModel from './model/points-model';
import FiltersView from './view/filters-view';
import SortersView from './view/sorters-view';


const pointsModel = new PointsModel();

const sortingContainer = document.querySelector('.trip-events');
const filtersContainer = document.querySelector('.trip-controls__filters');

const filtersData = generateFiltersData(pointsModel.points);


const listPresenter = new ListPresenter(
  {
    listContainer: document.querySelector('.trip-events'),
    pointsModel,
  }
);

render(new FiltersView({filtersData}), filtersContainer);
render(new SortersView(), sortingContainer);


listPresenter.init();
