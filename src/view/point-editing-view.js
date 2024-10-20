import { humanizePointDate } from '../utils';
import { POINT_TYPES } from '../const';
import AbstractView from '../framework/view/abstract-view';

function createTypeTemplate(type, isChecked) {
  const typeName = type[0].toUpperCase() + type.slice(1);
  return `
  <div class="event__type-item">
    <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${isChecked ? 'checked' : ''}>
    <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${typeName}</label>
  </div>
  `;
}

function createDestinationTemplate (name) {
  return `
  <option value="${name}"></option>
  `;
}

function createOfferTemplate (offerItem, isChecked) {
  const { id, title, price } = offerItem;
  return `
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}-1" type="checkbox" name="event-offer-${id}" ${isChecked ? 'checked' : ''}>
       <label class="event__offer-label" for="event-offer-${id}-1">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
  </div>
  `;
}

function createTypeList(itemType) {
  return POINT_TYPES.map((type) => {
    const isChecked = itemType === type;
    return createTypeTemplate(type, isChecked);
  }).join('');
}

function createDestinationList (allDestinations) {
  return allDestinations.map((destinationItem) => createDestinationTemplate(destinationItem.name)).join('');
}

function createOffersList (pointOffersIds, pointTypeOffers) {
  if (pointTypeOffers !== 'none') {
    return pointTypeOffers.map((pointTypeOffer) => {
      const isChecked = pointOffersIds.includes(pointTypeOffer.id);
      return createOfferTemplate(pointTypeOffer, isChecked);
    }).join('');
  } else {
    return 'none';
  }
}

function createPointEditingTemplate(point, pointDestination, pointTypeOffers, allDeestinations) {
  const { basePrice, type, dateFrom, dateTo } = point;
  const { name, description } = pointDestination;
  const typeName = type[0].toUpperCase() + type.slice(1);
  return `
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
       <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${createTypeList(type)}
          </fieldset>
       </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${typeName}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
        <datalist id="destination-list-1">
          ${createDestinationList(allDeestinations)}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
         <label class="visually-hidden" for="event-start-time-1">From</label>
       <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizePointDate(dateFrom,'DD/MM/YY HH:mm')}">
       &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
       <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizePointDate(dateTo,'DD/MM/YY HH:mm')}">
     </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
     <button class="event__reset-btn" type="reset">Delete</button>
     <button class="event__rollup-btn" type="button">
       <span class="visually-hidden">Open event</span>
      </button>
    </header>

    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

       <div class="event__available-offers">
       ${createOffersList(point.offers, pointTypeOffers)}
       </div>
     </section>

     <section class="event__section  event__section--destination">
       <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description}</p>
     </section>
    </section>
  </form>
  </li>
`;
}

export default class PointEditingView extends AbstractView {
  #point;
  #pointDestination;
  #pointTypeOffers;
  #destinations;

  constructor({point, pointDestination, pointTypeOffers, allDestinations}) {
    super();
    this.#point = point;
    this.#pointDestination = pointDestination;
    this.#pointTypeOffers = pointTypeOffers;
    this.#destinations = allDestinations;
  }

  get template() {
    return createPointEditingTemplate(this.#point, this.#pointDestination, this.#pointTypeOffers, this.#destinations);
  }
}
