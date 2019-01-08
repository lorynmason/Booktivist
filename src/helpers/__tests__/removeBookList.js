import { removeFromBookList, addMessage } from '../../actions'
import { removeBookList } from '../removeBookList';
import LocalStorageMock from '../__mocks__/localSorageMocks'


describe('getBookList', () => {
  let book = {
    Name: 'Looking for Alaska',
    wTeaser: 'teaser'
  }
  const removeBooks = removeBookList(book)
  const mockDispatch = jest.fn()
  it('should remove bookList from local storage and dispatch retriveBookList', () => {
    let books = [{
      Name: 'Looking for Alaska',
      wTeaser: 'teaser'
    }, {
      Name: 'Into the Wild',
      wTeaser: 'teaser'
    }]
    
    window.localStorage = new LocalStorageMock();
    localStorage.setItem('bookList', JSON.stringify(books))
    removeBooks(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(addMessage("Looking for Alaska was Removed from Your Must Read List"))
  });
});