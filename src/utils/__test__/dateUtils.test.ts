// dateUtils

import {formatISO, sub} from 'date-fns';

import {dateUtils} from '../dateUtils';

const MOCKED_NOW = 1749057505200;

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    test('should be displayed in seconds if less than 1 minute ago', () => {
      const time = sub(Date.now(), {seconds: 30});
      const timeISO = formatISO(time);
      expect(dateUtils.formatRelative(timeISO)).toBe('30 s');
    });
    test('should be displayed in minutes if less than 1 hour ago', () => {
      const time = sub(Date.now(), {minutes: 30});
      const timeISO = formatISO(time);
      expect(dateUtils.formatRelative(timeISO)).toBe('30 m');
    });

    test('should be displayed in hours if less than 1 day ago', () => {
      const time = sub(Date.now(), {hours: 15});
      const timeISO = formatISO(time);
      expect(dateUtils.formatRelative(timeISO)).toBe('15 h');
    });

    test('should be displayed in days if less than 7 days ago', () => {
      const time = sub(Date.now(), {days: 5});
      const timeISO = formatISO(time);
      expect(dateUtils.formatRelative(timeISO)).toBe('5 d');
    });

    test('should be displayed in weeks if less than 4 weeks ago', () => {
      const time = sub(Date.now(), {weeks: 3});
      const timeISO = formatISO(time);
      expect(dateUtils.formatRelative(timeISO)).toBe('3 sem');
    });

    test('should be displayed in months if less than 12 months ago', () => {
      const time = sub(Date.now(), {months: 2});
      const timeISO = formatISO(time);
      expect(dateUtils.formatRelative(timeISO)).toBe('2 meses');
    });

    test('should be displayed in dd/MM/yyyy if more than 12 months ago', () => {
      const time = sub(Date.now(), {months: 15});
      const timeISO = formatISO(time);
      expect(dateUtils.formatRelative(timeISO)).toBe('04/03/2024');
    });
  });
});
