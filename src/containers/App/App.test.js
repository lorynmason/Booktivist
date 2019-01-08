import React from 'react';
import { App, mapDispatchToProps} from './App';
import { shallow } from 'enzyme'
import { getBookList } from '../../helpers/getBookList'

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

  it.skip('mapDispatchToProps should dispatch getBookList helper when getBookList is called from props', () => {
    jest.mock('../../helpers/getBookList');
    const mockDispatch = jest.fn();
    getBookList.mockImplementation(() => {})

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getBookList();

    expect(mockDispatch).toHaveBeenCalled();
  })
})
