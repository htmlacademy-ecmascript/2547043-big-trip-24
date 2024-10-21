import AbstractView from '../framework/view/abstract-view';


function createFilterTemplate(filter) {
  const {type, /*count*/} = filter;
  const typeLabel = type[0].toUpperCase() + type.slice(1);
  return `
  <div class="trip-filters__filter">
    <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${type === 'everything' ? 'checked' : ''}>
    <label class="trip-filters__filter-label" for="filter-${type}">${typeLabel}</label>
  </div>
  `;
}

function createFiltersTemplate(filtersData) {
  const filtersTemplate = filtersData
    .map((filterData) => createFilterTemplate(filterData))
    .join('');
  return `
    <form class="trip-filters" action="#" method="get">
    ${filtersTemplate}
    <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
    `;
}

export default class FiltersView extends AbstractView {
  #filtersData;
  constructor({filtersData}) {
    super();
    this.#filtersData = filtersData;
  }

  get template() {
    return createFiltersTemplate(this.#filtersData);
  }
}
