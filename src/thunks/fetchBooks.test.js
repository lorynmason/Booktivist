import { fetchBooks } from '../thunks/fetchBooks'
import { addMessage, isLoading, addSearchResults, addSearchInfo } from '../actions'
import { key } from '../apikey';

describe('fetchBooks', () => {
  const url = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=327213-BinaryCh-074WIUMV&q=Into the Wild&type=books&verbose=1&wTeaser=item description"
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });
  
  it('should call fetch with the correct parameters', () => {
    window.fetch = jest.fn();
    const thunk = fetchBooks('Into the Wild');
    const expected = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=327213-BinaryCh-074WIUMV&q=Into the Wild&type=books&verbose=1&wTeaser=item description"
    thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  })

  it('should dispatch addMessage with a message if promise rejects', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        message: 'an error has occurred'
      })
    );
    const thunk = fetchBooks(url);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addMessage('an error has occurred'));
  });

  it('should dispatch addMessage with a message if promise resolves not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        statusText: 'an error has occurred'
      })
    );
    const thunk = fetchBooks(url);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addMessage('an error has occurred'));
  });

  it.skip('Dispatches the addSearchResults action if response is ok', async () => {
    const mockResults = [{ Name: 'Into the Wild' }, { Name: 'Looking for Alaska' }]

    const mockInfo = {
      name: "Into the Wild"
    }
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({results: mockResults,
        info: mockInfo})
      })
    );
    
    const thunk = fetchBooks(url);
    await thunk(mockDispatch);
    
    expect(mockDispatch).toHaveBeenCalledWith(addSearchResults(mockResults));
  });
})