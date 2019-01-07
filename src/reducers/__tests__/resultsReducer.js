import { resultsReducer } from '../resultsReducer'

describe('bookListReducer', () => {
  let mockBooks;
  beforeEach(() => {
    mockBooks = [{ Name: 'Into the Wild' }, { Name: 'Looking for Alaska' }]
  })
  
  it('should return a default state', () => {
    const expected = [];
    const result = resultsReducer([], {});
    expect(result).toEqual(expected);
  })

  it('should return state with an bookList array', () => {
    const mockAction = {
      type: 'ADD_RESULTS',
      results: mockBooks
    };
    const expected = mockBooks;
    const result = resultsReducer([], mockAction);
    expect(result).toEqual(expected);
  });
})