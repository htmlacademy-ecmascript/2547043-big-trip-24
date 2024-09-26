import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

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

function getTimeDiff(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dateFrom, 'm');
  const timeDiffDuration = dayjs.duration(timeDiff, 'm');
  switch (true) {
    case (timeDiffDuration.$d.days > 0): return timeDiffDuration.format('DD[D] HH[H] mm[M]');
    case (timeDiffDuration.$d.hours > 0): return timeDiffDuration.format('HH[H] mm[M]');
    case (timeDiffDuration.$d.minutes > 0): return timeDiffDuration.format('m[M]');
    default: return 'ERROR';
  }
}

export { getRandomArrayElement, getRandomInteger, getRandomSentenceFromText, humanizePointDate, getTimeDiff };
