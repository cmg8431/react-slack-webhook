import sum from './index';

describe('test sum function', () => {
  it('5 + 10 should be return 15', () => {
    expect(sum(5, 10)).toBe(15);
  });
});
