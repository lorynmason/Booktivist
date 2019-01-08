import Card from './Card'
import { shallow } from 'enzyme'
import React, { Component } from 'react';

describe('Card', () => {
  let mockFunc;
  let mockBook;
  let wrapper;
  let isFavoite = false;
  beforeEach(() => {
    mockFunc = jest.fn()
    mockBook = {
      Name: "Into the Wild",
      wTeaser: 'Into the Wild'
    }
    wrapper = shallow(<Card 
      isFavoite={isFavoite}
      addBookList={mockFunc}
      removeBookList={mockFunc}
      result={mockBook}
      sendSearch={mockFunc}
      loc=''/>)
  })
  it('Should match the snapshot if isFavorite is false', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('Should match the snapshot if isFavorite is true', () => {
    isFavoite = true
    expect(wrapper).toMatchSnapshot()
  })

  it('should call addBookList with result if bookmark icon is clicked and isFavorite is true', () => {
    wrapper.find('#bookmark').simulate('click')
    expect(mockFunc).toHaveBeenCalledWith(mockBook)
  })

  it('should call removeBookList with result if bookmark icon is clicked and isFavorite is false', () => {
    isFavoite = false
    wrapper.find('#bookmark').simulate('click')
    expect(mockFunc).toHaveBeenCalledWith(mockBook)
  })

  it('should call sendsearch with result.Name if search icon is clicked', () => {
    wrapper.find('#search').simulate('click')
    expect(mockFunc).toHaveBeenCalledWith(mockBook.Name)
  })

  it('should initially render addBookList button as an empty bookmard', () => {
    const result = wrapper.find('#bookmark').hasClass('far fa-bookmark');
    expect(result).toEqual(true);
  });

  it.skip('should render addBookList button as a full bookmark on click', () => {
    wrapper = shallow(<Card 
      isFavoite={true}
      addBookList={mockFunc}
      removeBookList={mockFunc}
      result={mockBook}
      sendSearch={mockFunc}
      loc=''/>)
    wrapper.find('#bookmark').simulate('click')
    const result = wrapper.find('#bookmark').simulate('click').hasClass("fas fa-bookmark");
    expect(result).toEqual(true);
  });
})