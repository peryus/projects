import { describe, test, expect } from '@jest/globals';
import { ageClassification, getWeekDay } from './main.js';

describe('ageClassification', () => {
  test('returns null for negative age', () => {
    expect(ageClassification(-1)).toBe(null);
  });
  test('returns childhood for age 0', () => {
    expect(ageClassification(0)).toBe('Дитинство');
  });
 test('returns childhood for age 24', () => {
   expect(ageClassification(24)).toBe('Дитинство');
 });
  test('returns young for age 25', () => {
    expect(ageClassification(25)).toBe('Молодість');
  });
  test('returns youth for age 44', () => {
    expect(ageClassification(44)).toBe('Молодість');
  });
  test('returns maturity for age 45', () => {
    expect(ageClassification(45)).toBe('Зрілість');
  });
  test('returns maturity for age 65', () => {
    expect(ageClassification(65)).toBe('Зрілість');
  });
  test('returns old age for age 66', () => {
    expect(ageClassification(66)).toBe('Старість');
  });
  test('returns old age for age 75', () => {
    expect(ageClassification(75)).toBe('Старість');
  });
  test('returns longevity for age 76', () => {
    expect(ageClassification(76)).toBe('Довголіття');
  });
  test('returns longevity for age 90', () => {
    expect(ageClassification(90)).toBe('Довголіття');
  });
  test('returns record for age 91', () => {
    expect(ageClassification(91)).toBe('Рекорд');
  });
  test('returns record for age 122', () => {
    expect(ageClassification(122)).toBe('Рекорд');
  });
  test('returns impossible for age 123', () => {
    expect(ageClassification(123)).toBe('Неможливо');
  });
});



describe('getWeekDay', () => {
  test('returns Monday for 1', () => {
    expect(getWeekDay(1)).toBe('Понеділок');
  });
  test('returns Tuesday for 2', () => {
    expect(getWeekDay(2)).toBe('Вівторок');
  });
  test('returns Wednesday for 3', () => {
    expect(getWeekDay(3)).toBe('Середа');
  });
  test('returns Thursday for 4', () => {
    expect(getWeekDay(4)).toBe('Четвер');
  });
  test('returns Friday for 5', () => {
    expect(getWeekDay(5)).toBe('Пʼятниця');
  });
  test('returns Saturday for 6', () => {
    expect(getWeekDay(6)).toBe('Субота');
  });
  test('returns Sunday for 7', () => {
    expect(getWeekDay(7)).toBe('Неділя');
  });
  test('returns null for 0', () => {
    expect(getWeekDay(0)).toBe(null);
  });
  test('returns null for negative number', () => {
    expect(getWeekDay(-1)).toBe(null);
  });
  test('returns null for number greater than 7', () => {
    expect(getWeekDay(8)).toBe(null);
  });
  test('returns null for non-numeric string', () => {
    expect(getWeekDay('abc')).toBe(null);
  });
});

