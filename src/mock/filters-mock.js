import { filterRules } from '../../utils/filter';

function generateFiltersData(points) {
  return Object.entries(filterRules).map(
    ([filterType, filterPoints]) => ({
      type: filterType,
      count: filterPoints(points).length
    })
  );
}

export { generateFiltersData };
