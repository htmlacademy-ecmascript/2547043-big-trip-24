import GlobalPresenter from './presenter/globalPresenter';

const filtersContainer = document.querySelector('.trip-controls__filters');
const listContainer = document.querySelector('.trip-events');
const sortingContainer = document.querySelector('.trip-events');

const globalPresenter = new GlobalPresenter(
  {
    filtersContainer: filtersContainer,
    listContainer: listContainer,
    sortingContainer: sortingContainer
  }
);

globalPresenter.init();
