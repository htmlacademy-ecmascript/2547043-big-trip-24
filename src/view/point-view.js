import { humanizePointDate, getTimeDiff } from '../../utils/point';
import AbstractView from '../framework/view/abstract-view';

function createPointOfferTemplate(title, price) {
  return `
  <li class="event__offer">
  <span class="event__offer-title">${title}</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${price}</span>
  </li>
`;
}

function createPointOffers(pointOffers) {
  if (pointOffers.length > 0) {
    return pointOffers.map((offer) => {
      if(offer) {
        return createPointOfferTemplate(offer.title, offer.price);
      }
    }).join('');
  } else {
    return '';
  }
}

function createPointTemplate(point, pointOffers, pointDestination) {
  const { basePrice, type, dateFrom, dateTo, isFavorite } = point;
  const { name } = pointDestination;
  const typeName = type[0].toUpperCase() + type.slice(1);
  const favoriteClassName = isFavorite ? 'event__favorite-btn--active' : '';

  return `
  <li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${humanizePointDate(dateFrom,'YYYY-MM-DD')}">${humanizePointDate(dateFrom,'MMM D')}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${typeName} ${name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${humanizePointDate(dateFrom,'YYYY-MM-D')}T${humanizePointDate(dateFrom,'HH:mm')}">${humanizePointDate(dateFrom,'HH:mm')}</time>
        &mdash;
        <time class="event__end-time" datetime="${humanizePointDate(dateTo,'YYYY-MM-D')}T${humanizePointDate(dateTo,'HH:mm')}">${humanizePointDate(dateTo,'HH:mm')}</time>
      </p>
      <p class="event__duration">${getTimeDiff(dateFrom, dateTo)}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${createPointOffers(pointOffers)}
    </ul>
    <button class="event__favorite-btn ${favoriteClassName}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>
`;
}

export default class PointView extends AbstractView {
  #point;
  #pointOffers;
  #pointDestination;

  #handleEditClick;

  constructor({point, pointOffers, pointDestination, onEditClick}) {
    super();
    this.#point = point;
    this.#pointOffers = pointOffers;
    this.#pointDestination = pointDestination;
    this.#handleEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createPointTemplate(this.#point, this.#pointOffers, this.#pointDestination);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
