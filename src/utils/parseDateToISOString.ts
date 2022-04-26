import { Dayjs } from 'dayjs';

export function parseDateToISOString(date: Dayjs | string) {
  if (date) {
    if (typeof date === 'object') {
      return date.format('YYYY-MM-DD');
    }

    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}`;
  }
}
