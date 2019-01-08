import React from 'react';
import { App, mapDispatchToProps} from './App';
import { shallow } from 'enzyme'
import { getBookList } from '../../helpers/getBookList'

jest.mock('../../helpers/getBookList');

describe('App', () => {
  let wrapper;
  const mockFunc = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<App getBookList={mockFunc}/>)
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call getBookList on componentDidMount', () => {
    expect(mockFunc).toHaveBeenCalled()
  })

  it('mapDispatchToProps should dispatch getBookList helper when getBookList is called from props', () => {
    const mockDispatch = jest.fn();
    getBookList.mockImplementation(() => {})
    const expected = getBookList();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getBookList();
    expect(mockDispatch).toHaveBeenCalledWith(expected)
  })
})
