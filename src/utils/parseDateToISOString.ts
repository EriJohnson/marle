import { Dayjs } from 'dayjs';

function parseDateToISOString(date: Dayjs | string): string {
  if (typeof date === 'object') {
    return date.format('YYYY-MM-DD');
  }

  const [day, month, year] = date.split('/');

  return `${year}-${month}-${day}`;
}

export default parseDateToISOString;
