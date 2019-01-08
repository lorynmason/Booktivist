import React from 'react';
import { Header, mapDispatchToProps} from './Header';
import { shallow } from 'enzyme'
import { fetchBooks } from '../../thunks/fetchBooks'

jest.mock('../../thunks/fetchBooks');

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header location={{pathname: '/'}} sendSearch={jest.fn()}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should set state of header true on componentDidMount if pathname !== "/"', () => {
    wrapper = shallow(<Header location={{pathname: '/SearchResults'}} sendSearch={jest.fn()}/>)
    const expected = {search: '', header: true}
    expect(wrapper.state()).toEqual(expected)
  })

  it('in handle change it should update state on change', () => {
    let wrapper = shallow(<Header />, { disableLifecycleMethods: true });
    wrapper.find('input').simulate('change', {
      target: {
        value: 'Into the Wild',
        name: 'search'
      }
    });
    const expected = {
      search: 'Into the Wild',
      header: false
    };
    expect(wrapper.state()).toEqual(expected);
  });

  it('in handleSubmit, if search it call sendSearch', () => {
    const mockSendSearch = jest.fn();
    wrapper = shallow(<Header sendSearch={mockSendSearch}/>, {disableLifecycleMethods: true})
    wrapper.setState({search: 'Into the Wild'})
    wrapper.handleSubmit = jest.fn();
    wrapper.sendSearch = mockSendSearch;

    wrapper.find('form').simulate('submit', {
      preventDefault: () => wrapper.handleSubmit()
    });

    expect(wrapper.handleSubmit).toHaveBeenCalled()
    expect(wrapper.sendSearch).toHaveBeenCalled();
  })

  it('mapDispatchToProps, should dispatch fetchBooks thunk when sendSearch is called from props', () => {
    const mockDispatch = jest.fn();
    fetchBooks.mockImplementation(() => {})
    const expected = fetchBooks();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.sendSearch();
    expect(mockDispatch).toHaveBeenCalledWith(expected)
  })
})