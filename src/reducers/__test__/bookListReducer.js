import { bookListReducer } from '../bookListReducer'

describe('bookListReducer', () => {
  it('should return a default state', () => {
    const expected = [];
    const result = errorReducer([], {});

    expect(result).toEqual(expected);
  })
})