import { retrieveBookList } from '../../actions'
import { getBookList } from '../getBookList';
import LocalStorageMock from '../__mocks__/localSorageMocks'


describe('getBookList', () => {
  const getBooks = getBookList()
  const mockDispatch = jest.fn()
  it('should get bookList from local storage and dispatch retriveBookList', () => {
    let book = {
      Name: 'Looking for Alaska',
      wTeaser: 'teaser'
    }
    
    window.localStorage = new LocalStorageMock();
    localStorage.setItem('bookList', JSON.stringify([book]))
     const bookList = JSON.parse(localStorage.getItem('bookList'))

    getBooks(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(retrieveBookList(bookList))
  });
});