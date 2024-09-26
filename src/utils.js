import dayjs from 'dayjs';

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

function humanizePointDate (date, DATE_FORMAT) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function getTimeDiff(/*dateFrom, dateTo*/) {
  return 'WIP';
}

export { getRandomArrayElement, getRandomInteger, getRandomSentenceFromText, humanizePointDate, getTimeDiff };
