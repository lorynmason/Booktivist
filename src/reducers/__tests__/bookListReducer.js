import { bookListReducer } from '../bookListReducer'

describe('bookListReducer', () => {
  const mockBooks = [{ Name: 'Into the Wild' }, { Name: 'Looking for Alaska' }]

  it('should return a default state', () => {
    const expected = [];
    const result = bookListReducer([], {});

    expect(result).toEqual(expected);
  })

  it('should return state with an bookList array', () => {
    const mockAction = {
      type: 'ADD_BOOK',
      bookList: mockBooks
    };
    const expected = mockBooks;

    const result = bookListReducer([], mockAction);
    expect(result).toEqual(expected);
  });

  it('should return state with an bookList array', () => {
    const mockAction = {
      type: 'REMOVE_BOOK',
      bookList: mockBooks
    };
    const expected = mockBooks;

    const result = bookListReducer([], mockAction);
    expect(result).toEqual(expected);
  });

  it('should return state with an bookList array', () => {
    const mockAction = {
      type: 'RETRIEVE_LIST',
      bookList: mockBooks
    };
    const expected = mockBooks;

    const result = bookListReducer([], mockAction);
    expect(result).toEqual(expected);
  });
})