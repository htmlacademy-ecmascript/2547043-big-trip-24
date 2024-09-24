import { mockOffers } from '../mock/offers-mock';
import { mockDestinations } from '../mock/destinations-mock';
import { getRandomPoint } from '../mock/point-list-mock';

const POINT_COUNT = 4;

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

  getDestinations() {
    return this.destinations;
  }
}

