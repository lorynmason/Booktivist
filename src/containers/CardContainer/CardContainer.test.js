import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapDispatchToProps, mapStateToProps } from './CardContainer';
import { addBookList } from '../../helpers/addBookList';
import { addMessage } from '../../actions'
import { removeBookList } from '../../helpers/removeBookList'
import { fetchBooks } from '../../thunks/fetchBooks'
import { getBookList } from '../../helpers/getBookList'

jest.mock('../../thunks/fetchBooks')
jest.mock('../../helpers/removeBookList')
jest.mock('../../helpers/addBookList')
jest.mock('../../helpers/getBookList')

describe('CardContainer', () => {
  let wrapper
  let mockFunc = jest.fn()
  let results = [{ Name: 'Into the Wild', wTeaser: 'teaser' }, { Name: 'Looking for Alaska', wTeaser: 'teaser' }]
  let info = {
    Name: 'Looking for Alaska',
    wTeaser: 'teaser'
  }
  let location = {pathname: '/SearchResults'}
  let isLoading = false
  let message = 'message'
  let bookList = results
  beforeEach(()=> {
    wrapper = shallow(<CardContainer results={results} info={info} location={location} addBookList={mockFunc} removeBookList={mockFunc} bookList={bookList} sendSearch={mockFunc} isLoading={isLoading} message={message} getBookList={mockFunc} addMessage={mockFunc}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot if location is /MustReadList', () => {
    location = {pathname: '/MustReadList'}

    wrapper = shallow(<CardContainer results={results} info={info} location={location} addBookList={mockFunc} removeBookList={mockFunc} bookList={bookList} sendSearch={mockFunc} isLoading={isLoading} message={message} getBookList={mockFunc} addMessage={mockFunc}/>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot isLoading is true', () => {
    isLoading = true

    wrapper = shallow(<CardContainer results={results} info={info} location={location} addBookList={mockFunc} removeBookList={mockFunc} bookList={bookList} sendSearch={mockFunc} isLoading={isLoading} message={message} getBookList={mockFunc} addMessage={mockFunc}/>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot if location = /SearchResults, and isLoading is false, a result.length = 0', () => {
    isLoading = false
    location = {pathname: '/SearchResults'}

    wrapper = shallow(<CardContainer results={[]} info={info} location={location} addBookList={mockFunc} removeBookList={mockFunc} bookList={bookList} sendSearch={mockFunc} isLoading={isLoading} message={message} getBookList={mockFunc} addMessage={mockFunc}/>)
    
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot if location = /MustReadList', () => {
    location = {pathname: '/MustReadList'}

    wrapper = shallow(<CardContainer results={[]} info={info} location={location} addBookList={mockFunc} removeBookList={mockFunc} bookList={bookList} sendSearch={mockFunc} isLoading={isLoading} message={message} getBookList={mockFunc} addMessage={mockFunc}/>)
    
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot if location = /MustReadList, a bookList.length = 0', () => {
    location = {pathname: '/MustReadList'}

    wrapper = shallow(<CardContainer results={[]} info={info} location={location} addBookList={mockFunc} removeBookList={mockFunc} bookList={[]} sendSearch={mockFunc} isLoading={isLoading} message={message} getBookList={mockFunc} addMessage={mockFunc}/>)
    
    expect(wrapper).toMatchSnapshot()
  })

  it('mapStateToProps should return results array, info object, message string bookList array, isLoading bool', () => {
    const mockState = {
      results: [{ Name: 'Into the Wild' }, { Name: 'Looking for Alaska' }],
      info: { Name: 'Into the Wild' },
      message: '',
      bookList: [{ Name: 'Into the Wild' }],
      isLoading: false,
      error: ''
    };

    const expected = {
      results: [{ Name: 'Into the Wild' }, { Name: 'Looking for Alaska' }],
      info: { Name: 'Into the Wild' },
      message: '',
      bookList: [{ Name: 'Into the Wild' }],
      isLoading: false,
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('mapDispatchToProps should dispatch addMessage', () => {
    const mockDispatch = jest.fn();
    const mockMessage = 'message'
    const expected = addMessage(mockMessage);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addMessage(mockMessage);

    expect(mockDispatch).toHaveBeenCalledWith(expected);

  })

  it('mapDispatchToProps should dispatch addBookList', () => {
    const mockDispatch = jest.fn();
    const mockBook = { Name: 'Into the Wild' }
    const expected = addBookList(mockBook);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addBookList(mockBook);

    expect(mockDispatch).toHaveBeenCalledWith(expected);
  })

  it('mapDispatchToProps should dispatch removeBookList', () => {
    const mockDispatch = jest.fn();
    const mockBook = { Name: 'Into the Wild' }
    const expected = removeBookList(mockBook);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeBookList(mockBook);

    expect(mockDispatch).toHaveBeenCalledWith(expected);
  })

  it('mapDispatchToProps should dispatch fetchBooks', () => {
    const mockDispatch = jest.fn();
    const mockSearch = 'Into the Wild'
    const expected = fetchBooks(mockSearch);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.sendSearch(mockSearch);

    expect(mockDispatch).toHaveBeenCalledWith(expected);
  })

  it('mapDispatchToProps should dispatch getBookList', () => {
    const mockDispatch = jest.fn();
    const expected = getBookList();

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getBookList();

    expect(mockDispatch).toHaveBeenCalledWith(expected);
  })

})