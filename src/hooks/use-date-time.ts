import { DATE_FORMAT } from 'config/constants';

const useDateTime = (defaultFormat = DATE_FORMAT) => {
  const getCurrentDate = (): Dayjs => dayjs();

  const getTimestamp = (): number => {
    return dayjs().unix();
  };

  const formatDate = (timestamp: number, format = defaultFormat): string => {
    if (timestamp) {
      return dayjs.unix(timestamp).utc().format(format);
    }
    return '-';
  };

  const getDayjsFromTimestamp = (timestamp: number): Dayjs =>
    timestamp ? dayjs.unix(timestamp).utc() : null;

  const getDiffBetweenDateTime = (
    startTimestamp: number,
    endTimestamp: number,
    unit: QUnitType,
  ): number => {
    return dayjs.unix(startTimestamp).diff(dayjs.unix(endTimestamp), unit);
  };

  const isAfter = (startTimestamp: number, endTimestamp: number): boolean => {
    return dayjs.unix(startTimestamp).isAfter(dayjs.unix(endTimestamp));
  };

  const convertDayToTimestamp = (date: Partial<Dayjs>): number => {
    return date.unix();
  };

  return {
    isAfter,
    getTimestamp,
    formatDate,
    getCurrentDate,
    getDayjsFromTimestamp,
    getDiffBetweenDateTime,
    convertDayToTimestamp,
  };
};

export default useDateTime;
