import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

function humanizePointDate (date, DATE_FORMAT) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function getTimeDiff(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dateFrom, 'm');
  const timeDiffDuration = dayjs.duration(timeDiff, 'm');
  switch (true) {
    case (timeDiffDuration.$d.days > 0):
      return timeDiffDuration.format('DD[D] HH[H] mm[M]');
    case (timeDiffDuration.$d.hours > 0):
      return timeDiffDuration.format('HH[H] mm[M]');
    case (timeDiffDuration.$d.minutes > 0):
      return timeDiffDuration.format('m[M]');
    default:
      return '';
  }
}

export { humanizePointDate, getTimeDiff };
