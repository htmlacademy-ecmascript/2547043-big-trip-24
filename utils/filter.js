import dayjs from 'dayjs';
import { FilterType } from '../src/const';

const filterRules = {
  [FilterType.EVERYTHING]: (points) => points.filter((point) => point),
  [FilterType.FUTURE]: (points) => points.filter((point) => dayjs().isBefore(dayjs(point.dateFrom))),
  [FilterType.PAST]: (points) => points.filter((point) => dayjs().isAfter(dayjs(point.dateTo))),
  [FilterType.PRESENT]: (points) => points.filter((point) => dayjs().isAfter(dayjs(point.dateFrom)) || dayjs().isSame(dayjs(point.dateFrom)) && dayjs().isBefore(dayjs(point.dateTo)) || dayjs().isSame(dayjs(point.dateTo))),
};

export { filterRules };
