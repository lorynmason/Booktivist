import React from 'react';
import { Message, mapStateToProps, mapDispatchToProps } from './Message'
import { shallow } from 'enzyme'
import { addMessage } from '../../actions'

describe('Message', () => {
  let wrapper;
  let message = 'There is a message'
  beforeEach(() => {
    wrapper = shallow(<Message addMessage={jest.fn()} message={message}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot if theres no message', () => {
    message = ''
    wrapper = shallow(<Message addMessage={jest.fn()} message={message}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('mapStateToProps, should return a message', () => {
    const mockState = {
      results: [{ Name: 'Into the Wild' }, { Name: 'Looking for Alaska' }],
      message: '',
     bookList: [{ Name: 'Into the Wild' }, { Name: 'Looking for Alaska' }],
      isLoading: false
    };
    const expected = '';
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps.message).toEqual(expected);
  })

  it('mapDispatchToProps, should dispatch addMessage action when addMessage is called from props', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch)
    const expected = addMessage('You have a message');
    mappedProps.addMessage('You have a message')
    expect(mockDispatch).toHaveBeenCalledWith(expected)
  })
})