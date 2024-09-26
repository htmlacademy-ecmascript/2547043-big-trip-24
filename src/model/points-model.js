import { mockOffers } from '../mock/offers-mock';
import { mockDestinations } from '../mock/destinations-mock';
import { getRandomPoint } from '../mock/point-list-mock';

const POINT_COUNT = 5;

export default class PointsModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint);
  offers = mockOffers;
  destinations = mockDestinations;

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getOffersByType(point) {
    const foundOffersItem = this.getOffers().find((item) => item.type === point.type);
    return foundOffersItem === undefined ? 'none' : foundOffersItem.offers;
  }

  getOffersById(point) {
    const allTypeOffers = this.getOffersByType(point);
    if(allTypeOffers !== 'none' && point.offers.length > 0) {
      return point.offers.map((offerId) => allTypeOffers.find((item) => item.id === offerId));
    } else {
      return 'none';
    }
  }

  getDestinations() {
    return this.destinations;
  }

  getDestinationById(id) {
    return this.getDestinations().find((item) => item.id === id);
  }
}
