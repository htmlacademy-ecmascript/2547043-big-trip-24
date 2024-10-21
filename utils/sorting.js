import { SortingType } from '../src/const';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

function getDuration(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dateFrom, 'm');
  const timeDiffDuration = dayjs.duration(timeDiff, 'm');
  return timeDiffDuration;
}

function durationCompare(elementA, elementB) {
  const durationA = getDuration(elementA.dateFrom, elementA.dateTo).asSeconds();
  const durationB = getDuration(elementB.dateFrom, elementB.dateTo).asSeconds();
  return durationA - durationB;
}

function priceCompare(elementA, elementB) {
  return Number(elementA.basePrice) - Number(elementB.basePrice);
}

function dayCompare(elementA, elementB) {
  switch (true) {
    case (dayjs(elementA.dateFrom).isAfter(dayjs(elementB.dateFrom))):
      return 1;
    case (dayjs(elementA.dateFrom).isBefore(dayjs(elementB.dateFrom))):
      return -1;
    case (dayjs(elementA.dateFrom).isSame(dayjs(elementB.dateFrom))):
      return 0;
    default:
      return 0;
  }
}

const sortingRules = {
  [SortingType.DAY]: (points) => points.sort(dayCompare),
  [SortingType.TIME]: (points) => points.sort(durationCompare),
  [SortingType.PRICE]: (points) => points.sort(priceCompare),
};

export { sortingRules };
