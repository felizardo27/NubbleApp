// dateUtils

import {add, Duration, formatISO, sub} from 'date-fns';

import {dateUtils} from '../dateUtils';

const MOCKED_NOW = 1717500000000;

function getDateISO(duration: Duration, op?: 'sub' | 'add'): string {
  op = op || 'sub';
  const time =
    op === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  const timeISO = formatISO(time);
  return dateUtils.formatRelative(timeISO);
}

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    test('should be displayed in seconds if less than 1 minute ago', () => {
      expect(getDateISO({seconds: 30})).toBe('30 s');
    });
    test('should be displayed in minutes if less than 1 hour ago', () => {
      expect(getDateISO({minutes: 30})).toBe('30 m');
    });

    test('should be displayed in hours if less than 1 day ago', () => {
      expect(getDateISO({hours: 15})).toBe('15 h');
    });

    test('should be displayed in days if less than 7 days ago', () => {
      expect(getDateISO({days: 5})).toBe('5 d');
    });

    test('should be displayed in weeks if less than 4 weeks ago', () => {
      expect(getDateISO({weeks: 3})).toBe('3 sem');
    });

    test('should be displayed in months if less than 12 months ago', () => {
      expect(getDateISO({months: 2})).toBe('2 meses');
    });

    test('should be displayed in dd/MM/yyyy if more than 12 months ago', () => {
      expect(getDateISO({months: 15})).toBe('04/03/2023');
    });

    test('should be displayed in dd/MM/yyyy if future date', () => {
      expect(getDateISO({months: 6}, 'add')).toBe('04/12/2024');
    });
  });
});
