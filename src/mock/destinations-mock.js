import { CITIES, DESCRIPTION_TEXT } from '../const';
import { getRandomArrayElement, getRandomInteger, getRandomSentenceFromText } from '../utils';

const mockDestinations = [
  {
    id: '1',
    name: getRandomArrayElement(CITIES),
    description: getRandomSentenceFromText(DESCRIPTION_TEXT),
    pictures: [
      {
        src:`https://loremflickr.com/248/152?random=${getRandomInteger(1, 20)}`,
        description: getRandomSentenceFromText(DESCRIPTION_TEXT)
      }
    ],
  },
  {
    id: '2',
    name: getRandomArrayElement(CITIES),
    description: getRandomSentenceFromText(DESCRIPTION_TEXT),
    pictures: [
      {
        src:`https://loremflickr.com/248/152?random=${getRandomInteger(1, 20)}`,
        description: getRandomSentenceFromText(DESCRIPTION_TEXT)
      }
    ],
  },
  {
    id: '3',
    name: getRandomArrayElement(CITIES),
    description: getRandomSentenceFromText(DESCRIPTION_TEXT),
    pictures: [
      {
        src:`https://loremflickr.com/248/152?random=${getRandomInteger(1, 20)}`,
        description: getRandomSentenceFromText(DESCRIPTION_TEXT)
      }
    ],
  },
  {
    id: '4',
    name: getRandomArrayElement(CITIES),
    description: getRandomSentenceFromText(DESCRIPTION_TEXT),
    pictures: [
      {
        src:`https://loremflickr.com/248/152?random=${getRandomInteger(1, 20)}`,
        description: getRandomSentenceFromText(DESCRIPTION_TEXT)
      }
    ],
  },
  {
    id: '5',
    name: getRandomArrayElement(CITIES),
    description: getRandomSentenceFromText(DESCRIPTION_TEXT),
    pictures: [
      {
        src:`https://loremflickr.com/248/152?random=${getRandomInteger(1, 20)}`,
        description: getRandomSentenceFromText(DESCRIPTION_TEXT)
      }
    ],
  }
];

export { mockDestinations };
