import { getRandomInteger } from '../../utils/common';

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '1',
        title: 'Upgrade to a business class',
        price: getRandomInteger(1, 5000),
      },
      {
        id: '2',
        title: 'Order Uber',
        price: getRandomInteger(1, 5000)
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        id: '1',
        title: 'Rent a car',
        price: getRandomInteger(1, 5000),
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: '1',
        title: 'Add breakfast',
        price: getRandomInteger(1, 5000),
      },
      {
        id: '2',
        title: 'Add dinner',
        price: getRandomInteger(1, 5000),
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: '1',
        title: 'Book tickets',
        price: getRandomInteger(1, 5000),
      },
      {
        id: '2',
        title: 'Lunch in city',
        price: getRandomInteger(1, 5000),
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: '1',
        title: 'Add luggage',
        price: getRandomInteger(1, 5000),
      },
      {
        id: '2',
        title: 'Switch to comfort',
        price: getRandomInteger(1, 5000),
      },
    ],
  },
];

export { mockOffers };
