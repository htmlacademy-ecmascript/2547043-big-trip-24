import dayjs from 'dayjs';

const DATE_FORMAT = '';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInteger(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSentenceFromText (text) {
  return getRandomArrayElement(text.split('.'));
}

function humanizePointDate (date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}
export { getRandomArrayElement, getRandomInteger, getRandomSentenceFromText };
