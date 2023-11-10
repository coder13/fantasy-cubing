/**
 * This file contains functions for calculating the current week and year.
 * The game starts on 2023-08-31T00:00:00.000Z.
 *
 * The game is played in 52 weeks starting after the major championships to end with the next ones.
 *
 */

// const START_OF_GAME = new Date('2023-08-31T00:00:00.000Z');
const START_OF_PLAY_TEST = new Date('2023-03-02T00:00:00.000Z');

export const getToday = () => new Date().toISOString().split('T')[0];

export function currentWeek(): number {
  const now = new Date();

  const dateDiff = now.getTime() - START_OF_PLAY_TEST.getTime();
  const weekDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 7));
  return weekDiff;
}

export function currentYear(): number {
  const now = new Date();

  const dateDiff = now.getTime() - START_OF_PLAY_TEST.getTime();
  const yearDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 7 * 52));
  return yearDiff;
}
