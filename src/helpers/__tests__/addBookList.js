import { addMessage } from '../../actions'
import { addBookList } from '../addBookList';
import LocalStorageMock from '../__mocks__/localSorageMocks'

describe('addBookList', () => {
  let book = {
    Name: 'Looking for Alaska',
    wTeaser: 'teaser'
  }
  const addBook = addBookList(book)
  const mockDispatch = jest.fn()
  it('should get bookList from local storage and dispatch addMessage', () => {
    window.localStorage = new LocalStorageMock();
    addBook.oldbookList = JSON.parse(localStorage.getItem('bookList'))
    localStorage.setItem('bookList', JSON.stringify([book]))
    addBook(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(addMessage("Looking for Alaska was Added to Your Must Read List"))
  });

  it('should get bookList from local storage and dispatch addMessage', () => {
    window.localStorage = new LocalStorageMock();
    window.localStorage.clear()
    addBook(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(addMessage("Looking for Alaska was Added to Your Must Read List"))
  });
});