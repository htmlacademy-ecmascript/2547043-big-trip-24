import { POINT_TYPES } from '../const';
import { getRandomInteger, getRandomArrayElement } from '../utils';

const mockPoints = [
  {
    id: '1',
    basePrice: getRandomInteger(0, 10000),
    type: getRandomArrayElement(POINT_TYPES),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination:`${getRandomInteger(1, 5)}`,
    isFavorite: false,
    offers: Array.from({length: getRandomInteger(1, 4)}, () => `${getRandomInteger(1,4)}`),
  },
  {
    id: '2',
    basePrice: getRandomInteger(0, 10000),
    type: getRandomArrayElement(POINT_TYPES),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination:`${getRandomInteger(1, 5)}`,
    isFavorite: false,
    offers: Array.from({length: getRandomInteger(1, 4)}, () => `${getRandomInteger(1,4)}`),
  },
  {
    id: '3',
    basePrice: getRandomInteger(0, 10000),
    type: getRandomArrayElement(POINT_TYPES),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination:`${getRandomInteger(1, 5)}`,
    isFavorite: false,
    offers: Array.from({length: getRandomInteger(1, 4)}, () => `${getRandomInteger(1,4)}`),
  },
  {
    id: '4',
    basePrice: getRandomInteger(0, 10000),
    type: getRandomArrayElement(POINT_TYPES),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination:`${getRandomInteger(1, 5)}`,
    isFavorite: false,
    offers: Array.from({length: getRandomInteger(1, 4)}, () => `${getRandomInteger(1,4)}`),
  },
  {
    id: '5',
    basePrice: getRandomInteger(0, 10000),
    type: getRandomArrayElement(POINT_TYPES),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination:`${getRandomInteger(1, 5)}`,
    isFavorite: false,
    offers: Array.from({length: getRandomInteger(1, 4)}, () => `${getRandomInteger(1,4)}`),
  }
];

export { mockPoints };
