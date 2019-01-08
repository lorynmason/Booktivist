import React from 'react'
import { shallow } from 'enzyme'
import { Page404 } from './Page404'

describe('Page404', () => {
  let location = {pathname: '/SearchResults'}
  let wrapper = shallow(<Page404 location={location}/>)
  it('should match snapsnot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should match snapsnot if location is home', () => {
  location = {pathname: '/'}
  wrapper = shallow(<Page404 location={location}/>)
    expect(wrapper).toMatchSnapshot()
  })
})