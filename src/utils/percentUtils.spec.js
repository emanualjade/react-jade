import {getWidthAsPercentOfTotalWidth} from './percentUtils';

describe('ProgressBar', () => {
  test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
    const width = getWidthAsPercentOfTotalWidth(50, 500);
    expect(width).toEqual(250);
  });
});