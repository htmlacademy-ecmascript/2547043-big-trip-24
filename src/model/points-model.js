import { mockOffers } from '../mock/offers-mock';
import { mockDestinations } from '../mock/destinations-mock';
import { getRandomPoint } from '../mock/point-list-mock';

const POINT_COUNT = 4;

export default class PointsModel {
  #points = Array.from({length: POINT_COUNT}, getRandomPoint);
  #offers = mockOffers;
  #destinations = mockDestinations;

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }

  getOffersByType(point) {
    const foundOffersItem = this.offers.find((item) => item.type === point.type);
    return foundOffersItem === undefined ? [] : foundOffersItem.offers;
  }

  getOffersById(point) {
    const allTypeOffers = this.getOffersByType(point);
    return point.offers.map((offerId) => allTypeOffers.find((item) => item.id === offerId));
  }

  getDestinationById(id) {
    return this.destinations.find((item) => item.id === id);
  }
}
