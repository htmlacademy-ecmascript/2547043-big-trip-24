import FiltersPresenter from './presenter/filters-presenter';
import ListPresenter from './presenter/list-presenter';
import SortingPresenter from './presenter/sorting-presenter';

const filtersContainer = document.querySelector('.trip-controls__filters');
const listContainer = document.querySelector('.trip-events');
const sortingContainer = document.querySelector('.trip-events');

const filtersPresenter = new FiltersPresenter(filtersContainer);
const listPresenter = new ListPresenter(listContainer);
const sortingPresenter = new SortingPresenter(sortingContainer);

filtersPresenter.init();
sortingPresenter.init();
listPresenter.init();
