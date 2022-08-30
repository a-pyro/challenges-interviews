const mapPMto24h = {
  '01': '13',
  '02': '14',
  '03': '15',
  '04': '16',
  '05': '17',
  '06': '18',
  '07': '19',
  '08': '20',
  '09': '21',
  '10': '22',
  '11': '23',
  '12': '12',
}

const timeConversion = (s: string): string => {
  const partOfTheDay = s.slice(-2)
  const [hours, minutes, seconds] = s.slice(0, -2).split(':')
  return `${
    partOfTheDay === 'PM'
      ? mapPMto24h[hours as keyof typeof mapPMto24h]
      : hours === '12'
      ? '00'
      : hours
  }:${minutes}:${seconds}`
}
