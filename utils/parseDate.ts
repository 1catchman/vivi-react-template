import { formatDistance, subSeconds } from 'date-fns';

export function parseDate(date: string | Date) {
  return formatDistance(subSeconds(new Date(date), 0), new Date(), {
    addSuffix: true
  });
}
