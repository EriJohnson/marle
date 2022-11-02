function parseDateToISOString(date: string): string {
  const [day, month, year] = date.split('/');

  return `${year}-${month}-${day}`;
}

export default parseDateToISOString;
